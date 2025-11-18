import Colors from './colors';

export enum ELink {
  'LINK_INACTIVE' = 'LINK_INACTIVE',
  'LINK_ACTIVE' = 'LINK_ACTIVE',
}

export const LINK_COLOR = {
  dark: {
    [ELink.LINK_INACTIVE]: Colors.yellow_50,
    [ELink.LINK_ACTIVE]: Colors.yellow_60,
  },
  light: {
    [ELink.LINK_INACTIVE]: Colors.yellow_70,
    [ELink.LINK_ACTIVE]: Colors.yellow_80,
  },
};
