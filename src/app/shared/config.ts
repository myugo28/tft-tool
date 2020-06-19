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
  {
    id: 4,
    name: 'Aurelion Sol',
    cost: 5,
    origin: ChampOrigin.Rebel,
    classes: [ChampClass.Starship],
  },
  {
    id: 5,
    name: 'Bard',
    cost: 3,
    origin: ChampOrigin.Astro,
    classes: [ChampClass.Mystic],
  },
  {
    id: 6,
    name: 'Blitzcrank',
    cost: 2,
    origin: ChampOrigin.Chrono,
    classes: [ChampClass.Brawler],
  },
  {
    id: 7,
    name: 'Caitlyn',
    cost: 1,
    origin: ChampOrigin.Chrono,
    classes: [ChampClass.Sniper],
  },
  {
    id: 8,
    name: 'Cassiopeia',
    cost: 3,
    origin: ChampOrigin.BattleCast,
    classes: [ChampClass.Sniper],
  },
  {
    id: 9,
    name: 'Darius',
    cost: 2,
    origin: ChampOrigin.SpacePirate,
    classes: [ChampClass.ManaReaver],
  },
  {
    id: 10,
    name: 'Ekko',
    cost: 5,
    origin: ChampOrigin.Cybernetic,
    classes: [ChampClass.Infiltrator],
  },
  {
    id: 11,
    name: 'Ezreal',
    cost: 3,
    origin: ChampOrigin.Chrono,
    classes: [ChampClass.Blaster],
  },
  {
    id: 12,
    name: 'Fiora',
    cost: 1,
    origin: ChampOrigin.Cybernetic,
    classes: [ChampClass.Blademaster],
  },
  {
    id: 13,
    name: 'Fizz',
    cost: 4,
    origin: ChampOrigin.MechPilot,
    classes: [ChampClass.Infiltrator],
  },
  {
    id: 14,
    name: 'Gangplank',
    cost: 5,
    origin: ChampOrigin.SpacePirate,
    classes: [ChampClass.Demolitionist],
  },
  {
    id: 15,
    name: 'Gnar',
    cost: 4,
    origin: ChampOrigin.Astro,
    classes: [ChampClass.Brawler],
  },
  {
    id: 16,
    name: 'Graves',
    cost: 4,
    origin: ChampOrigin.SpacePirate,
    classes: [ChampClass.Blaster],
  },
  {
    id: 17,
    name: 'Illaoi',
    cost: 1,
    origin: ChampOrigin.BattleCast,
    classes: [ChampClass.Brawler],
  },
  {
    id: 18,
    name: 'Irelia',
    cost: 4,
    origin: ChampOrigin.Cybernetic,
    classes: [ChampClass.Blademaster, ChampClass.ManaReaver],
  },
  {
    id: 19,
    name: 'Janna',
    cost: 5,
    origin: ChampOrigin.StarGuardian,
    classes: [ChampClass.Paragon],
  },
  {
    id: 20,
    name: 'Jarvan IV',
    cost: 1,
    origin: ChampOrigin.DarkStar,
    classes: [ChampClass.Protector],
  },
  {
    id: 21,
    name: 'Jayce',
    cost: 1,
    origin: ChampOrigin.SpacePirate,
    classes: [ChampClass.Vanguard],
  },
  {
    id: 22,
    name: 'Jhin',
    cost: 4,
    origin: ChampOrigin.DarkStar,
    classes: [ChampClass.Sniper],
  },
  {
    id: 23,
    name: 'Jinx',
    cost: 4,
    origin: ChampOrigin.Rebel,
    classes: [ChampClass.Blaster],
  },
  {
    id: 24,
    name: 'Karma',
    cost: 3,
    origin: ChampOrigin.DarkStar,
    classes: [ChampClass.Mystic],
  },
  {
    id: 25,
    name: 'KogMaw',
    cost: 2,
    origin: ChampOrigin.BattleCast,
    classes: [ChampClass.Blaster],
  },
  {
    id: 26,
    name: 'Leona',
    cost: 2,
    origin: ChampOrigin.Cybernetic,
    classes: [ChampClass.Vanguard],
  },
  {
    id: 27,
    name: 'Lucian',
    cost: 2,
    origin: ChampOrigin.Cybernetic,
    classes: [ChampClass.Blaster],
  },
  {
    id: 28,
    name: 'LuLu',
    cost: 5,
    origin: ChampOrigin.Celestial,
    classes: [ChampClass.Mystic],
  },
];
