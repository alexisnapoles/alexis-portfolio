export interface ProjectInterface {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export const PROJECTLIST: ProjectInterface[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description for project one.',
    tags: ['Angular', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description for project two.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://example.com/project-two',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Description for project three.',
    tags: ['Angular', 'Typescript', 'DaisyUI'],
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'Description for project four.',
    tags: ['Angular', 'TailwindCSS', 'Firebase'],
    link: 'https://example.com/project-four',
  },
];
