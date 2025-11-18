import Colors from './colors';

export enum EConstant {
  'CONSTANT_COLOR_BRAND' = 'CONSTANT_COLOR_BRAND',
  'CONSTANT_RED' = 'CONSTANT_RED',
  'CONSTANT_GREEN' = 'CONSTANT_GREEN',
  'CONSTANT_BLACK' = 'CONSTANT_BLACK',
  'CONSTANT_WHITE' = 'CONSTANT_WHITE',
  'CONSTANT_GRAY' = 'CONSTANT_GRAY',
}

export const BORDER_COLORS = {
  dark: {
    [EConstant.CONSTANT_COLOR_BRAND]: Colors.yellow_50,
    [EConstant.CONSTANT_RED]: Colors.red_50,
    [EConstant.CONSTANT_GREEN]: Colors.green_70,
    [EConstant.CONSTANT_BLACK]: Colors.black_a100,
    [EConstant.CONSTANT_WHITE]: Colors.white_a10,
    [EConstant.CONSTANT_GRAY]: Colors.gray_60,
  },
  light: {
    [EConstant.CONSTANT_COLOR_BRAND]: Colors.yellow_50,
    [EConstant.CONSTANT_RED]: Colors.red_50,
    [EConstant.CONSTANT_GREEN]: Colors.green_70,
    [EConstant.CONSTANT_BLACK]: Colors.black_a100,
    [EConstant.CONSTANT_WHITE]: Colors.white_a10,
    [EConstant.CONSTANT_GRAY]: Colors.gray_60,
  },
};
