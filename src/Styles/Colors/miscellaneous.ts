import Colors from './colors';

export enum EMiscellaneous {
  'OVERLAY' = 'OVERLAY',
  'SKELETON_BACKGROUND' = 'SKELETON_BACKGROUND',
  'SKELETON_ELEMENT' = 'SKELETON_ELEMENT',
  'SCROLL_BAR' = 'SCROLL_BAR',
}

export const MISC_COLORS = {
  dark: {
    [EMiscellaneous.OVERLAY]: Colors.black_a80,
    [EMiscellaneous.SKELETON_BACKGROUND]: Colors.white_a5,
    [EMiscellaneous.SKELETON_ELEMENT]: Colors.white_a10,
    [EMiscellaneous.SCROLL_BAR]: Colors.white_a10,
  },
  light: {
    [EMiscellaneous.OVERLAY]: Colors.black_a80,
    [EMiscellaneous.SKELETON_BACKGROUND]: Colors.black_a5,
    [EMiscellaneous.SKELETON_ELEMENT]: Colors.black_a10,
    [EMiscellaneous.SCROLL_BAR]: Colors.black_a10,
  },
};
