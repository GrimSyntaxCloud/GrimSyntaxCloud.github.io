import {
  matchesHomepageCandidate,
  type HomepageCandidate,
  type HomepageSelection,
} from '../lib/archive-filter';

export function initHomepageFilters() {
  const panel = document.querySelector<HTMLElement>('.home-project-controls');
  if (!panel) return;
  const search = panel.querySelector<HTMLInputElement>('#home-project-search')!;
  const clear = panel.querySelector<HTMLButtonElement>('#home-clear-filters')!;
  const active = panel.querySelector<HTMLElement>('#home-active-filters')!;
  const moreCount = panel.querySelector<HTMLElement>(
    '#home-more-filter-count',
  )!;
  const collectionButtons = [
    ...panel.querySelectorAll<HTMLButtonElement>('[data-collection]'),
  ];
  const quick = [
    ...panel.querySelectorAll<HTMLButtonElement>('[data-home-quick]'),
  ];
  const selects = {
    technology: panel.querySelector<HTMLSelectElement>(
      '#home-filter-technology',
    )!,
    focus: panel.querySelector<HTMLSelectElement>('#home-filter-focus')!,
    feature: panel.querySelector<HTMLSelectElement>('#home-filter-feature')!,
    availability: panel.querySelector<HTMLSelectElement>(
      '#home-filter-availability',
    )!,
  };
  const cards = [
    ...document.querySelectorAll<HTMLElement>('[data-project-candidate]'),
  ].map((card) => ({
    card,
    candidate: JSON.parse(card.dataset.projectCandidate!) as HomepageCandidate,
  }));
  const count = document.querySelector<HTMLElement>('#filter-status')!;
  const empty = document.querySelector<HTMLElement>('.filter-empty')!;
  const featured = document.querySelector<HTMLElement>('.featured-projects')!;
  const index = document.querySelector<HTMLElement>('.project-index')!;
  let collection = 'all';

  function filter() {
    const selection: HomepageSelection = {
      collection,
      search: search.value,
      technology: selects.technology.value,
      focus: selects.focus.value,
      feature: selects.feature.value,
      availability: selects.availability.value,
    };
    let visible = 0;
    cards.forEach(({ card, candidate }) => {
      card.hidden = !matchesHomepageCandidate(candidate, selection);
      if (!card.hidden) visible++;
    });
    featured.hidden = !featured.querySelector(
      '[data-project-candidate]:not([hidden])',
    );
    index.hidden = !index.querySelector(
      '[data-project-candidate]:not([hidden])',
    );
    count.textContent = `${visible} of ${cards.length} projects shown`;
    empty.hidden = visible !== 0;
    collectionButtons.forEach((button) =>
      button.setAttribute(
        'aria-pressed',
        String(button.dataset.collection === collection),
      ),
    );
    quick.forEach((button) =>
      button.setAttribute(
        'aria-pressed',
        String(
          button.dataset.homeQuick === 'live'
            ? selects.availability.value === 'live'
            : selects.focus.value === button.dataset.homeQuick,
        ),
      ),
    );
    const selectedCount = Object.values(selects).filter(
      (select) => select.value,
    ).length;
    moreCount.textContent = selectedCount ? `(${selectedCount} selected)` : '';
    active.replaceChildren();
    const chip = (label: string, remove: () => void) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = `${label} ×`;
      button.setAttribute('aria-label', `Remove filter: ${label}`);
      button.addEventListener('click', () => {
        remove();
        filter();
        search.focus();
      });
      active.append(button);
    };
    if (collection !== 'all')
      chip(
        collection === 'built-with-ai' ? 'Built with AI' : 'Web apps',
        () => (collection = 'all'),
      );
    if (search.value.trim())
      chip(`Search: ${search.value.trim()}`, () => (search.value = ''));
    const labels = {
      technology: 'Technology',
      focus: 'Focus',
      feature: 'Feature',
      availability: 'Availability',
    };
    Object.entries(selects).forEach(([key, select]) => {
      if (select.value)
        chip(
          `${labels[key as keyof typeof labels]}: ${select.selectedOptions[0].textContent}`,
          () => (select.value = ''),
        );
    });
  }
  search.addEventListener('input', filter);
  Object.values(selects).forEach((select) =>
    select.addEventListener('change', filter),
  );
  collectionButtons.forEach((button) =>
    button.addEventListener('click', () => {
      collection = button.dataset.collection!;
      filter();
    }),
  );
  quick.forEach((button) =>
    button.addEventListener('click', () => {
      const select =
        button.dataset.homeQuick === 'live'
          ? selects.availability
          : selects.focus;
      select.value =
        select.value === button.dataset.homeQuick
          ? ''
          : button.dataset.homeQuick!;
      filter();
    }),
  );
  clear.addEventListener('click', () => {
    collection = 'all';
    search.value = '';
    Object.values(selects).forEach((select) => (select.value = ''));
    filter();
    search.focus();
  });
  filter();
  panel.hidden = false;
}
