import test from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { projectFilters } from '../src/data/project-filters.ts';
import { matchesArchiveCandidate } from '../src/lib/archive-filter.ts';

const selection = {
  search: '',
  group: 'all',
  coursework: true,
  focus: '',
  technology: '',
  feature: '',
  availability: '',
};
const candidate = (id) => ({
  id,
  ...projectFilters[id],
  search: id.replaceAll('-', ' '),
  availability: ['live', 'source', 'story'],
});
const matches = (id, filters, group = 'Applications') =>
  matchesArchiveCandidate(candidate(id), group, { ...selection, ...filters });

test('every published project has reviewed filter metadata', () => {
  const ids = readdirSync(new URL('../src/content/projects/', import.meta.url))
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.slice(0, -3));
  assert.deepEqual(Object.keys(projectFilters).sort(), ids.sort());
});
test('combined filters must match one project, not separate apps in a shared repo', () => {
  const ids = ['meme-press', 'still', 'interval', 'field-weather'];
  assert.deepEqual(
    ids.filter((id) =>
      matches(id, { focus: 'full-stack', feature: 'browser-storage' }),
    ),
    [],
  );
  assert.deepEqual(
    ids.filter((id) =>
      matches(id, { focus: 'full-stack', feature: 'database' }),
    ),
    ['field-weather'],
  );
  assert.deepEqual(
    ids.filter((id) =>
      matches(id, { feature: 'visualization', technology: 'Azure' }),
    ),
    ['interval'],
  );
});
test('demo IDs, static pages, and local storage do not claim account authentication or databases', () => {
  for (const id of ['nodebucket', 'grade-lab', 'loc8r', 'still'])
    assert.equal(matches(id, { feature: 'authentication' }), false);
  for (const id of [
    'interval',
    'still',
    'task-manager',
    'reading-room',
    'loc8r',
    'fold-and-fork',
  ])
    assert.equal(matches(id, { feature: 'database' }), false);
  assert.equal(matches('bcrs', { feature: 'authentication' }), true);
  assert.equal(matches('pets-r-us', { feature: 'database' }), true);
});
test('coursework exclusion, collections, and clear-selection semantics compose', () => {
  assert.equal(matches('opus', { coursework: false }, 'Coursework'), false);
  assert.equal(matches('opus', {}, 'Coursework'), true);
  assert.equal(matches('opus', { group: 'Design studies' }), false);
});
test('search handles multiple terms, case and whitespace; availability uses actual destinations', () => {
  assert.equal(matches('field-weather', { search: ' WEATHER  field ' }), true);
  assert.equal(matches('field-weather', { search: 'weather books' }), false);
  const sourceOnly = { ...candidate('opus'), availability: ['source'] };
  assert.equal(
    matchesArchiveCandidate(sourceOnly, 'Coursework', {
      ...selection,
      availability: 'live',
    }),
    false,
  );
  assert.equal(
    matchesArchiveCandidate(sourceOnly, 'Coursework', {
      ...selection,
      availability: 'story',
    }),
    false,
  );
  assert.equal(
    matchesArchiveCandidate(sourceOnly, 'Coursework', {
      ...selection,
      availability: 'source',
    }),
    true,
  );
});
