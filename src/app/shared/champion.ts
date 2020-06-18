export enum ChampOrigin {
  Astro = 'Origin_Astro',
  BattleCast = 'Origin_BattleCast',
  Celestial = 'Origin_Celestial',
  Chrono = 'Origin_Chrono',
  Cybernetic = 'Origin_Cybernetic',
  DarkStar = 'Origin_DarkStar',
  MechPilot = 'Origin_MechPilot',
  Rebel = 'Origin_Rebel',
  SpacePirate = 'Origin_SpacePirate',
  StarGuardian = 'Origin_StarGuardian',
}

export enum ChampClass {
  Blademaster = 'Class_Blademaster',
  Blaster = 'Class_Blaster',
  Brawler = 'Class_Brawler',
  Demolitionist = 'Class_Demolitionist',
  Infiltrator = 'Class_Infiltrator',
  ManaReaver = 'Class_ManaReaver',
  Mercenary = 'Class_Mercenary',
  Mystic = 'Class_Mystic',
  Paragon = 'Class_Paragon',
  Protector = 'Class_Protector',
  Sniper = 'Class_Sniper',
  Sorcerer = 'Class_Sorcerer',
  Starship = 'Class_Starship',
  Vanguard = 'Class_Vanguard',
}

export const ChampMaxCountEachCost = {
  1: 29,
  2: 22,
  3: 18,
  4: 12,
  5: 10,
};

export const characters = [
  {
    id: 1,
    name: 'Ahri',
    cost: 2,
    origin: ChampOrigin.StarGuardian,
    classes: [ChampClass.Sorcerer],
  },
  {
    id: 2,
    name: 'Annie',
    cost: 2,
    origin: ChampOrigin.MechPilot,
    classes: [ChampClass.Sorcerer],
  },
  {
    id: 3,
    name: 'Ashe',
    cost: 3,
    origin: ChampOrigin.Celestial,
    classes: [ChampClass.Sniper],
  },
];
