export const FONT_FAMILIES = {
  semibold: 'MiSansLatin-Semibold',
  regular: 'MiSansLatin-Regular',
  medium: 'MiSansLatin-Medium',
  bold: 'MiSansLatin-Bold',
} as const;

export const FONT_WEIGHTS = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export type FontFamily = keyof typeof FONT_FAMILIES;
export type FontWeight = keyof typeof FONT_WEIGHTS;
