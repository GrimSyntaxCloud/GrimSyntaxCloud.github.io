export const withBase = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;

export type Design = 'editorial' | 'industrial';
export const designPath = (design: Design, path = '') =>
  withBase(
    design === 'industrial'
      ? `industrial/${path === '404.html' ? '404/' : path}`
      : path,
  );
