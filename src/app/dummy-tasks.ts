// Stores example task data for the application
import type { TaskData } from './tasks/task/task.model'; // Imports the task data model

// Contains the example task data
export const DUMMY_TASKS: TaskData[] = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Find the One Piece',
    summary: 'Lead the crew toward the final island and search for the legendary treasure.',
    dueDate: '2026-12-31',
  },
  {
    id: 't2',
    userId: 'u1',
    title: 'Plan the next adventure',
    summary: 'Choose the next island that the Straw Hat crew should visit.',
    dueDate: '2026-08-10',
  },
  {
    id: 't3',
    userId: 'u2',
    title: 'Prepare medical supplies',
    summary: 'Check the medicine and prepare supplies for the next journey.',
    dueDate: '2026-08-05',
  },
  {
    id: 't4',
    userId: 'u3',
    title: 'Practice a new song',
    summary: 'Prepare a new song to entertain the crew during the voyage.',
    dueDate: '2026-08-15',
  },
  {
    id: 't5',
    userId: 'u4',
    title: 'Improve sword skills',
    summary: 'Practice the three-sword fighting style and become stronger.',
    dueDate: '2026-09-01',
  },
  {
    id: 't6',
    userId: 'u5',
    title: 'Update the world map',
    summary: 'Add the latest islands and sailing routes to the map.',
    dueDate: '2026-08-20',
  },
  {
    id: 't7',
    userId: 'u6',
    title: 'Create a new invention',
    summary: 'Build a useful tool for the crew using available materials.',
    dueDate: '2026-08-18',
  },
  {
    id: 't8',
    userId: 'u7',
    title: 'Prepare dinner',
    summary: 'Cook a healthy and delicious meal for everyone on the ship.',
    dueDate: '2026-08-02',
  },
  {
    id: 't9',
    userId: 'u8',
    title: 'Study the Poneglyph',
    summary: 'Research the ancient text and record important information.',
    dueDate: '2026-09-10',
  },
  {
    id: 't10',
    userId: 'u9',
    title: 'Repair the Sunny',
    summary: 'Inspect the ship and repair any damaged parts before sailing.',
    dueDate: '2026-08-12',
  },
];