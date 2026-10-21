import type * as Three from 'three';

const root = document.documentElement;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const motionButton =
  document.querySelector<HTMLButtonElement>('.motion-toggle');
let paused = reducedMotion.matches;
let elapsed = 0;
let lastTime = 0;
let frame = 0;
let visible = true;
let renderer: Three.WebGLRenderer | undefined;
let renderFrame: ((time: number) => void) | undefined;
const host = document.querySelector<HTMLElement>('[data-sculpture]');

function stop() {
  cancelAnimationFrame(frame);
  frame = 0;
  lastTime = 0;
}
function tick(time: number) {
  frame = 0;
  if (lastTime) elapsed += Math.min((time - lastTime) / 1000, 0.05);
  lastTime = time;
  renderFrame?.(elapsed);
  if (!paused && visible && !document.hidden)
    frame = requestAnimationFrame(tick);
}
function start() {
  if (!renderFrame) return;
  if (paused) {
    renderFrame(elapsed);
    return;
  }
  if (!frame && visible && !document.hidden)
    frame = requestAnimationFrame(tick);
}
function updateMotion() {
  root.dataset.motion = paused ? 'paused' : 'running';
  if (motionButton) {
    motionButton.hidden = false;
    motionButton.textContent = paused ? 'Resume motion' : 'Pause motion';
    motionButton.setAttribute('aria-pressed', String(paused));
  }
  stop();
  start();
}
motionButton?.addEventListener('click', () => {
  paused = !paused;
  updateMotion();
});
reducedMotion.addEventListener('change', () => {
  paused = reducedMotion.matches;
  updateMotion();
});
document.addEventListener('visibilitychange', () => {
  document.hidden ? stop() : start();
});
updateMotion();

// Standard links and filtering keep working independently of WebGL support.
const filters = document.querySelector<HTMLElement>('.project-filters');
if (filters) filters.hidden = false;
const filterButtons =
  document.querySelectorAll<HTMLButtonElement>('[data-filter]');
const cards = document.querySelectorAll<HTMLElement>('[data-category]');
filterButtons.forEach((button) =>
  button.addEventListener('click', () => {
    let count = 0;
    filterButtons.forEach((other) =>
      other.setAttribute('aria-pressed', String(button === other)),
    );
    cards.forEach((card) => {
      card.hidden =
        button.dataset.filter === 'built-with-ai'
          ? card.dataset.builtWithAi !== 'true'
          : button.dataset.filter !== 'all' &&
            card.dataset.category !== button.dataset.filter;
      if (!card.hidden) count++;
    });
    const empty = document.querySelector<HTMLElement>('.filter-empty');
    if (empty) empty.hidden = count !== 0;
    const status = document.querySelector('#filter-status');
    if (status)
      status.textContent = `${count} ${count === 1 ? 'project' : 'projects'} shown.`;
  }),
);
const reveals = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        reveals.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 },
);
document.querySelectorAll('.reveal').forEach((el) => reveals.observe(el));
let scrollQueued = false;
const progress = document.querySelector<HTMLElement>('.reading-progress');
function updateScroll() {
  const range = document.documentElement.scrollHeight - innerHeight;
  if (progress)
    progress.style.transform = `scaleX(${range > 0 ? scrollY / range : 0})`;
  scrollQueued = false;
}
addEventListener(
  'scroll',
  () => {
    if (!scrollQueued) {
      scrollQueued = true;
      requestAnimationFrame(updateScroll);
    }
  },
  { passive: true },
);
updateScroll();

if (host) {
  const canvas = host.querySelector('canvas')!;
  const industrial = host.dataset.sculpture === 'industrial';
  try {
    // Keep navigation, filtering, and motion controls independent of the 3D download.
    const THREE = await import('three');
    const pointer = new THREE.Vector2();
    const smoothPointer = new THREE.Vector2();
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'low-power',
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = industrial ? 1.45 : 1.25;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0.1, 8.6);
    scene.add(
      new THREE.HemisphereLight(
        industrial ? 0xb9dcff : 0xffffff,
        industrial ? 0x4c2110 : 0x93a6cc,
        3.1,
      ),
    );
    const key = new THREE.DirectionalLight(0xffffff, 5);
    key.position.set(-3, 5, 4);
    scene.add(key);
    const rim = new THREE.DirectionalLight(industrial ? 0xffb479 : 0x9abbff, 4);
    rim.position.set(4, 1, -2);
    scene.add(rim);
    const fill = new THREE.DirectionalLight(0xffffff, 2);
    fill.position.set(2, -3, 4);
    scene.add(fill);
    const sculpture = new THREE.Group();
    scene.add(sculpture);
    const materials: Three.Material[] = [];
    const geometries: Three.BufferGeometry[] = [];
    function material(color: number, metalness = 0.1, roughness = 0.3) {
      const m = new THREE.MeshStandardMaterial({ color, metalness, roughness });
      materials.push(m);
      return m;
    }
    function box(
      w: number,
      h: number,
      d: number,
      m: Three.Material,
      parent: Three.Object3D = sculpture,
    ) {
      const g = new THREE.BoxGeometry(w, h, d);
      geometries.push(g);
      const mesh = new THREE.Mesh(g, m);
      parent.add(mesh);
      return mesh;
    }
    const parts: Three.Group[] = [];
    if (!industrial) {
      // A continuous folded ribbon: three ideas turning into a single physical form.
      const blue = material(0x153bea, 0.32, 0.22);
      const pale = material(0xf3f3e9, 0.05, 0.4);
      const makeRibbon = (
        radius: number,
        width: number,
        twists: number,
        mat: Three.Material,
      ) => {
        const vertices: number[] = [],
          indices: number[] = [];
        const segments = 240,
          thickness = 0.055;
        for (let i = 0; i <= segments; i++) {
          const a = (i / segments) * Math.PI * 2;
          const center = new THREE.Vector3(
            Math.cos(a) * radius,
            Math.sin(a) * radius,
            Math.sin(a * 3) * 0.13,
          );
          const radial = new THREE.Vector3(Math.cos(a), Math.sin(a), 0);
          const across = radial
            .multiplyScalar(Math.cos(a * twists))
            .add(new THREE.Vector3(0, 0, Math.sin(a * twists)));
          const tangent = new THREE.Vector3(-Math.sin(a), Math.cos(a), 0);
          const normal = new THREE.Vector3()
            .crossVectors(tangent, across)
            .normalize();
          for (const [side, depth] of [
            [-1, -1],
            [1, -1],
            [1, 1],
            [-1, 1],
          ]) {
            const v = center
              .clone()
              .addScaledVector(across, (side * width) / 2)
              .addScaledVector(normal, depth * thickness);
            vertices.push(v.x, v.y, v.z);
          }
          if (i < segments)
            for (let j = 0; j < 4; j++) {
              const a0 = i * 4 + j,
                b0 = i * 4 + ((j + 1) % 4),
                c0 = (i + 1) * 4 + ((j + 1) % 4),
                d0 = (i + 1) * 4 + j;
              indices.push(a0, b0, d0, b0, c0, d0);
            }
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(vertices, 3),
        );
        geometry.setIndex(indices);
        geometry.computeVertexNormals();
        geometries.push(geometry);
        const mesh = new THREE.Mesh(geometry, mat);
        sculpture.add(mesh);
        return mesh;
      };
      const ribbon = makeRibbon(1.35, 0.85, 1.5, blue);
      ribbon.rotation.set(0.35, 0.4, -0.25);
      const core = box(0.54, 0.54, 0.54, pale);
      core.rotation.set(0.4, 0.65, 0.2);
      const points = new THREE.Group();
      sculpture.add(points);
      for (let i = 0; i < 3; i++) {
        const a = (i * Math.PI * 2) / 3;
        const tile = box(0.14, 0.14, 0.14, blue, points);
        tile.position.set(Math.cos(a) * 2, Math.sin(a) * 2, 0);
        tile.rotation.set(a, a, 0.3);
      }
      sculpture.rotation.set(0.2, -0.3, -0.2);
    } else {
      // Exploded assembly: machined layers, fasteners, and a bright inner core.
      const aluminum = material(0xa2afb0, 0.78, 0.28),
        graphite = material(0x263137, 0.65, 0.28),
        orange = material(0xff571e, 0.3, 0.28),
        bolts = material(0xe3e7dc, 0.85, 0.18);
      for (let i = 0; i < 3; i++) {
        const layer = new THREE.Group();
        parts.push(layer);
        sculpture.add(layer);
        const slab = box(2.3, 0.28, 2.1, i === 1 ? orange : graphite, layer);
        const edge = new THREE.EdgesGeometry(slab.geometry);
        geometries.push(edge);
        const edgeMaterial = new THREE.LineBasicMaterial({
          color: i === 1 ? 0xffc78c : 0x829899,
          transparent: true,
          opacity: 0.8,
        });
        materials.push(edgeMaterial);
        slab.add(new THREE.LineSegments(edge, edgeMaterial));
        box(1.6, 0.08, 1.4, aluminum, layer).position.y = 0.17;
        box(0.92, 0.16, 0.8, i === 1 ? graphite : orange, layer).position.y =
          0.28;
        for (const x of [-0.91, 0.91])
          for (const z of [-0.81, 0.81]) {
            const g = new THREE.CylinderGeometry(0.08, 0.08, 0.16, 12);
            geometries.push(g);
            const fastener = new THREE.Mesh(g, bolts);
            fastener.position.set(x, 0.21, z);
            layer.add(fastener);
          }
        for (let j = 0; j < 8; j++) {
          const fin = box(0.07, 0.15, 0.9, graphite, layer);
          fin.position.set(-0.58 + j * 0.165, 0.32, 0);
        }
        layer.position.y = (i - 1) * 1.05;
      }
      for (const x of [-0.91, 0.91])
        for (const z of [-0.81, 0.81]) {
          const g = new THREE.CylinderGeometry(0.025, 0.025, 3, 8);
          geometries.push(g);
          const rod = new THREE.Mesh(g, aluminum);
          rod.position.set(x, 0, z);
          sculpture.add(rod);
        }
      sculpture.rotation.set(0.38, -0.5, -0.08);
    }
    const initialRotation = sculpture.rotation.clone();
    renderFrame = (time) => {
      if (!renderer) return;
      if (!paused) {
        smoothPointer.lerp(pointer, 0.045);
        sculpture.rotation.y =
          initialRotation.y +
          Math.sin(time * 0.25) * 0.27 +
          smoothPointer.x * 0.35;
        sculpture.rotation.x =
          initialRotation.x +
          Math.cos(time * 0.22) * 0.08 -
          smoothPointer.y * 0.2;
        sculpture.rotation.z = initialRotation.z + Math.sin(time * 0.2) * 0.05;
        sculpture.position.y = Math.sin(time * 0.55) * 0.07;
        parts.forEach((part, i) => {
          part.position.y =
            (i - 1) *
            (1.05 +
              Math.sin(time * 0.6) * 0.1 +
              Math.abs(smoothPointer.x) * 0.18);
        });
      }
      renderer.render(scene, camera);
    };
    const resize = new ResizeObserver(() => {
      if (!renderer) return;
      const { width, height } = host.getBoundingClientRect();
      if (width <= 0 || height <= 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderFrame?.(elapsed);
    });
    resize.observe(host);
    host.addEventListener('pointermove', (event) => {
      if (paused || event.pointerType === 'touch') return;
      const r = host.getBoundingClientRect();
      pointer.set(
        ((event.clientX - r.left) / r.width) * 2 - 1,
        ((event.clientY - r.top) / r.height) * 2 - 1,
      );
    });
    host.addEventListener('pointerleave', () => pointer.set(0, 0));
    const visibility = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        visible ? start() : stop();
      },
      { rootMargin: '50px' },
    );
    visibility.observe(host);
    canvas.addEventListener('webglcontextlost', (event) => {
      event.preventDefault();
      stop();
      host.classList.remove('is-ready');
    });
    canvas.addEventListener('webglcontextrestored', () => {
      host.classList.add('is-ready');
      start();
    });
    host.classList.add('is-ready');
    start();
    addEventListener('pagehide', (event) => {
      stop();
      if (event.persisted) return;
      resize.disconnect();
      visibility.disconnect();
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer?.dispose();
    });
    addEventListener('pageshow', (event) => {
      if (event.persisted) start();
    });
  } catch {
    // Typography provides a static composition if GPU rendering is unavailable.
    renderer?.dispose();
    renderer = undefined;
    canvas.hidden = true;
  }
}
