// @ts-nocheck
import { StyleSheet } from 'react-native-unistyles';
import {
  BACKGROUND,
  BUTTON_COLORS,
  ICON_COLOR,
  TEXT_COLOR,
} from './Styles/Colors';
import { FONT_FAMILIES, FONT_WEIGHTS } from './Styles/fonts';

const sharedFonts = {
  families: FONT_FAMILIES,
  weights: FONT_WEIGHTS,
};

const lightTheme = {
  colors: {
    BACKGROUND: BACKGROUND.light,
    TEXT: TEXT_COLOR.light,
    BUTTON: BUTTON_COLORS.light,
    ICON: ICON_COLOR.light,
  },
  fonts: sharedFonts,
  gap: (v: number) => v * 8,
};

const darkTheme = {
  colors: {
    BACKGROUND: BACKGROUND.dark,
    TEXT: TEXT_COLOR.dark,
    BUTTON: BUTTON_COLORS.dark,
    ICON: ICON_COLOR.dark,
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
