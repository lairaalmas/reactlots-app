export const WORLD_TITLES = ['willow_creek', 'oasis_springs'] as const;

export type WorldTitles = typeof WORLD_TITLES[number];

export type World = {
  id: string;
  title: WorldTitles;
  description: string;
};