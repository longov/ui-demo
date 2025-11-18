import Colors from './colors';

export enum EBorder {
  'BORDER_1' = 'BORDER_1',
  'BORDER_1_SUBTLE' = 'BORDER_1_SUBTLE',
  'BORDER_2' = 'BORDER_2',
  'BORDER_2_SUBTLE' = 'BORDER_2_SUBTLE',
  'BORDER_3' = 'BORDER_3',
  'BORDER_3_SUBTLE' = 'BORDER_3_SUBTLE',
  'BORDER_ACTIVE' = 'BORDER_ACTIVE',
  'BORDER_ALPHA' = 'BORDER_ALPHA',
  'BORDER_ALPHA_INVERSE' = 'BORDER_ALPHA_INVERSE',
  'BORDER_ALPHA_SUBTLE' = 'BORDER_ALPHA_SUBTLE',
  'BORDER_ALPHA_CONSTANT' = 'BORDER_ALPHA_CONSTANT',
  'BORDER_ALPHA_INVERSE_CONSTANT' = 'BORDER_ALPHA_INVERSE_CONSTANT',
}

export const BORDER_COLORS = {
  dark: {
    [EBorder.BORDER_1]: Colors.gray_92,
    [EBorder.BORDER_1_SUBTLE]: Colors.gray_95,
    [EBorder.BORDER_2]: Colors.gray_85,
    [EBorder.BORDER_2_SUBTLE]: Colors.gray_90,
    [EBorder.BORDER_3]: Colors.gray_80,
    [EBorder.BORDER_3_SUBTLE]: Colors.gray_85,
    [EBorder.BORDER_ACTIVE]: Colors.yellow_50,
    [EBorder.BORDER_ALPHA]: Colors.white_a10,
    [EBorder.BORDER_ALPHA_INVERSE]: Colors.black_a10,
    [EBorder.BORDER_ALPHA_CONSTANT]: Colors.white_a10,
    [EBorder.BORDER_ALPHA_INVERSE_CONSTANT]: Colors.black_a10,
  },
  light: {
    [EBorder.BORDER_1]: Colors.gray_10,
    [EBorder.BORDER_1_SUBTLE]: Colors.gray_8,
    [EBorder.BORDER_2]: Colors.gray_8,
    [EBorder.BORDER_2_SUBTLE]: Colors.gray_5,
    [EBorder.BORDER_3]: Colors.gray_8,
    [EBorder.BORDER_3_SUBTLE]: Colors.gray_1,
    [EBorder.BORDER_ACTIVE]: Colors.yellow_60,
    [EBorder.BORDER_ALPHA]: Colors.black_a10,
    [EBorder.BORDER_ALPHA_INVERSE]: Colors.white_a10,
    [EBorder.BORDER_ALPHA_SUBTLE]: Colors.black_a5,
    [EBorder.BORDER_ALPHA_CONSTANT]: Colors.white_a10,
    [EBorder.BORDER_ALPHA_INVERSE_CONSTANT]: Colors.black_a10,
  },
};
