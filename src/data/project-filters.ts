// Describe the current demo, not historical backends or features implied by a name.
// Evidence: each project's implementation and its maintained portfolio write-up.
export const focusOptions = {
  frontend: 'Frontend',
  'full-stack': 'Full stack',
  apis: 'APIs',
  games: 'Games',
  'developer-tools': 'Developer tools',
};
export const featureOptions = {
  authentication: 'Authentication',
  database: 'Database persistence',
  'browser-storage': 'Browser storage',
  crud: 'Create, update & delete',
  realtime: 'Real-time communication',
  visualization: 'Data visualization',
  'api-integration': 'API integration',
};
export interface ProjectFilters {
  focus: (keyof typeof focusOptions)[];
  features: (keyof typeof featureOptions)[];
  technologies: string[];
  note?: string;
}
export const projectFilters: Record<string, ProjectFilters> = {
  portfolio: {
    focus: ['frontend'],
    features: [],
    technologies: ['Astro', 'TypeScript', 'JavaScript', 'CSS'],
  },
  bcrs: {
    focus: ['full-stack'],
    features: ['authentication', 'database', 'crud', 'visualization'],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Azure', 'Cosmos DB'],
  },
  nodebucket: {
    focus: ['full-stack'],
    features: ['database', 'crud', 'visualization'],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Azure', 'Cosmos DB'],
    note: 'Shared demo board; employee ID is not private account authentication.',
  },
  'pets-r-us': {
    focus: ['full-stack'],
    features: ['authentication', 'database'],
    technologies: [
      'JavaScript',
      'Node.js',
      'Express',
      'EJS',
      'Azure',
      'Cosmos DB',
    ],
  },
  'eny-salon': {
    focus: ['full-stack'],
    features: ['authentication', 'database', 'crud'],
    technologies: [
      'JavaScript',
      'Node.js',
      'Express',
      'EJS',
      'Azure',
      'Cosmos DB',
      'PHP (original edition)',
    ],
  },
  'the-edit': {
    focus: ['full-stack'],
    features: ['authentication', 'database', 'crud'],
    technologies: [
      'JavaScript',
      'Node.js',
      'Express',
      'EJS',
      'Azure',
      'Cosmos DB',
      'PHP (original edition)',
    ],
  },
  'endpoint-studio': {
    focus: ['full-stack', 'apis', 'developer-tools'],
    features: ['authentication', 'database', 'crud'],
    technologies: [
      'JavaScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Azure',
      'Cosmos DB',
    ],
    note: 'Password verification is a demo exercise within a private workspace.',
  },
  'relay-room': {
    focus: ['full-stack'],
    features: ['database', 'realtime'],
    technologies: ['JavaScript', 'WebRTC', 'Node.js', 'Azure', 'Cosmos DB'],
    note: 'Database stores short-lived signaling metadata, never recordings. Direct calls may fail on restrictive networks.',
  },
  'field-weather': {
    focus: ['full-stack'],
    features: ['database', 'api-integration'],
    technologies: ['JavaScript', 'Node.js', 'Azure', 'Cosmos DB'],
    note: 'Database persistence is a shared forecast cache, not visitor accounts or location history.',
  },
  interval: {
    focus: ['full-stack'],
    features: ['visualization'],
    technologies: ['JavaScript', 'Node.js', 'Azure'],
    note: 'Server validates and discards registrations; charts show fixed sample data. No database.',
  },
  'reading-room': {
    focus: ['frontend'],
    features: ['browser-storage', 'api-integration'],
    technologies: ['Angular', 'TypeScript'],
    note: 'Wishlist saves in this browser; no account or database service.',
  },
  'grade-lab': {
    focus: ['frontend'],
    features: ['visualization'],
    technologies: ['Angular', 'TypeScript'],
    note: 'Demo student ID is not account authentication; no database.',
  },
  opus: {
    focus: ['frontend'],
    features: [],
    technologies: ['Angular', 'TypeScript'],
  },
  still: {
    focus: ['frontend'],
    features: ['browser-storage', 'crud'],
    technologies: ['JavaScript', 'CSS'],
    note: 'Tasks save in this browser, without accounts or database synchronization.',
  },
  'task-manager': {
    focus: ['frontend'],
    features: ['browser-storage', 'crud'],
    technologies: ['JavaScript', 'CSS'],
    note: 'Tasks save in this browser, without accounts or database synchronization.',
  },
  'meme-press': {
    focus: ['frontend'],
    features: [],
    technologies: ['JavaScript', 'Canvas', 'CSS'],
  },
  'city-atlas': {
    focus: ['frontend'],
    features: ['visualization'],
    technologies: ['JavaScript', 'D3'],
    note: 'Map uses a fixed historical city sample.',
  },
  loc8r: {
    focus: ['frontend'],
    features: [],
    technologies: ['JavaScript', 'Pug', 'Node.js'],
    note: 'Node.js builds static pages. Listings and reviews are fictional; the form does not save.',
  },
  'loan-calculator': {
    focus: ['frontend'],
    features: ['visualization'],
    technologies: ['Angular', 'TypeScript', 'SVG'],
  },
  'investment-estimator': {
    focus: ['frontend'],
    features: ['visualization'],
    technologies: ['JavaScript', 'SVG', 'CSS'],
  },
  'savings-calculator': {
    focus: ['frontend'],
    features: ['visualization'],
    technologies: ['JavaScript', 'SVG', 'CSS'],
  },
  'event-countdown': {
    focus: ['frontend'],
    features: [],
    technologies: ['JavaScript', 'CSS'],
  },
  'pig-dice': {
    focus: ['frontend', 'games'],
    features: [],
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
  'prism-lanes': {
    focus: ['frontend'],
    features: [],
    technologies: ['JavaScript', 'Three.js', 'CSS'],
    note: 'Visit planner is a browser-only demonstration, not a booking service.',
  },
  'fold-and-fork': {
    focus: ['frontend'],
    features: [],
    technologies: ['JavaScript', 'HTML', 'CSS'],
    note: 'Browser-only ordering study; no saved orders, payments or database.',
  },
  'dynamic-recipes': {
    focus: ['frontend'],
    features: [],
    technologies: ['JavaScript', 'CSS'],
  },
  'trivia-turbo': {
    focus: ['full-stack', 'games'],
    features: ['realtime'],
    technologies: ['React', 'TypeScript', 'WebSockets', 'Cloudflare'],
  },
};
