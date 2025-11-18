// @ts-nocheck
import { StyleSheet } from 'react-native-unistyles';
import { BUTTON_COLORS, TEXT_COLOR } from './Styles/Colors';
import { FONT_FAMILIES, FONT_WEIGHTS } from './Styles/fonts';

const sharedFonts = {
  families: FONT_FAMILIES,
  weights: FONT_WEIGHTS,
};

const lightTheme = {
  colors: {
    TEXT: TEXT_COLOR.light,
    BUTTON: BUTTON_COLORS.light,
  },
  fonts: sharedFonts,
  gap: (v: number) => v * 8,
};

const darkTheme = {
  colors: {
    TEXT: TEXT_COLOR.dark,
    BUTTON: BUTTON_COLORS.dark,
  },
  fonts: sharedFonts,
  gap: (v: number) => v * 8,
};

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    initialTheme: 'light',
  },
  breakpoints,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
});
