//@ts-nocheck
import type { PropsWithChildren } from 'react';
import React from 'react';
import { Text } from 'react-native';
// @ts-ignore
import type { UnistylesVariants } from 'react-native-unistyles';
// @ts-ignore
import { StyleSheet } from 'react-native-unistyles';
import EFontSize from '../Styles/fontSize';
import { EText } from '../Styles/Colors';
import { ELetterSpacing } from '../Styles/letterSpacing';
import { guardUnistyles } from '../Styles/utils';
import type { UnistylesValues } from 'react-native-unistyles';

interface TypographyProps
  extends PropsWithChildren,
    UnistylesVariants<typeof styles> {
  type:
    | 'tiny'
    | '3xsmall'
    | '2xsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | '2xlarge'
    | '3xlarge';
  color?: string;
  isStrong?: boolean;
  isCentered?: boolean;
  style?: any;
}

export const Typography: React.FunctionComponent<TypographyProps> = ({
  children,
  type = 'medium',
  color = EText.TEXT_PRIMARY,
  isCentered = false,
  isStrong = false,
  style,
}) => {
  styles.useVariants({
    type,
    isStrong,
    isCentered,
  });

  const isUnistylesStyle = guardUnistyles(style);
  //
  // console.log(isUnistylesStyle, '_style');

  return (
    <Text style={[styles.text, styles.color(color), isUnistylesStyle]}>
      {children}
    </Text>
  );
};

const styles: UnistylesValues<any> = StyleSheet.create((theme, rt) => ({
  text: {
    variants: {
      isStrong: {
        true: {
          fontFamily: theme.fonts.families.bold,
          fontWeight: theme.fonts.weights.bold,
        },
        default: {
          fontFamily: theme.fonts.families.regular,
          fontWeight: theme.fonts.weights.regular,
        },
      },
      isCentered: {
        true: {
          textAlign: 'center',
        },
      },
      type: {
        'tiny': {
          fontSize: rt.fontScale * EFontSize.font_size_100,
          letterSpacing: ELetterSpacing.normal,
        },
        '3xsmall': {
          fontSize: rt.fontScale * EFontSize.font_size_125,
          letterSpacing: ELetterSpacing.normal,
        },
        '2xsmall': {
          fontSize: rt.fontScale * EFontSize.font_size_150,
          letterSpacing: ELetterSpacing.normal,
        },
        'xsmall': {
          fontSize: rt.fontScale * EFontSize.font_size_162,
          letterSpacing: ELetterSpacing.normal,
        },
        'small': {
          fontSize: rt.fontScale * EFontSize.font_size_175,
          letterSpacing: ELetterSpacing.normal,
        },
        'medium': {
          fontSize: rt.fontScale * EFontSize.font_size_187,
          letterSpacing: ELetterSpacing.normal,
        },
        'large': {
          fontSize: rt.fontScale * EFontSize.font_size_200,
          letterSpacing: ELetterSpacing.normal,
        },
        'xlarge': {
          fontSize: rt.fontScale * EFontSize.font_size_225,
          letterSpacing: ELetterSpacing.normal,
        },
        '2xlarge': {
          fontSize: rt.fontScale * EFontSize.font_size_250,
          letterSpacing: ELetterSpacing.normal,
        },
        '3xlarge': {
          fontSize: rt.fontScale * EFontSize.font_size_300,
          letterSpacing: ELetterSpacing.normal,
        },
      },
    },
  },
  color: (_color: string) => ({
    color: theme.colors.TEXT[_color] || theme.colors.TEXT.TEXT,
  }),
}));
