export interface ArchiveCandidate {
  id: string;
  search: string;
  focus: string[];
  features: string[];
  technologies: string[];
  availability: string[];
}
export interface ArchiveSelection {
  search: string;
  group: string;
  coursework: boolean;
  focus: string;
  technology: string;
  feature: string;
  availability: string;
}
export function matchesArchiveCandidate(
  candidate: ArchiveCandidate,
  group: string,
  selection: ArchiveSelection,
) {
  const terms = selection.search
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);
  return (
    (selection.coursework || group !== 'Coursework') &&
    (selection.group === 'all' || selection.group === group) &&
    terms.every((term) => candidate.search.includes(term)) &&
    (!selection.focus || candidate.focus.includes(selection.focus)) &&
    (!selection.technology ||
      candidate.technologies.includes(selection.technology)) &&
    (!selection.feature || candidate.features.includes(selection.feature)) &&
    (!selection.availability ||
      candidate.availability.includes(selection.availability))
  );
}
