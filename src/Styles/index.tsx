// @ts-nocheck
import {
  BACKGROUND,
  BORDER_COLORS,
  BUTTON_COLORS,
  EBackground,
  EBorder,
  EBottomSheet,
  EButtonColor,
  EIcon,
  EInputColor,
  ELink,
  EMiscellaneous,
  ETab,
  EText,
  EToast,
  ICON_COLOR,
  INPUT_COLOR,
  LINK_COLOR,
  MISC_COLORS,
  SHEET_COLORS,
  TAB_COLOR,
  TEXT_COLOR,
  TOAST,
} from './Colors';
import { EProcess, PROCESS_COLORS } from './Colors/process';
import FONTS_SIZE from './fontSize';
import FONTS_WEIGHT from './fontWeight';
import { ESpacing } from './spacing';
// @ts-ignore
import { StyleSheet } from 'react-native-unistyles';

//Enum for the different TextStyles
export enum TEXT_TITLE {
  'TEXT_TITLE_XSMALL' = 'TEXT_TITLE_XSMALL',
  'TEXT_TITLE_SMALL' = 'TEXT_TITLE_SMALL',
  'TEXT_TITLE' = 'TEXT_TITLE',
  'TEXT_TITLE_LARGE' = 'TEXT_TITLE_LARGE',
  'TEXT_TITLE_XLARGE' = 'TEXT_TITLE_XLARGE',
}

export enum TEXT_UI {
  'TEXT_TINY' = 'TEXT_TINY',
  'TEXT_TINY_STRONG' = 'TEXT_TINY_STRONG',
  'TEXT_3XSMALL' = 'TEXT_3XSMALL',
  'TEXT_3XSMALL_STRONG' = 'TEXT_3XSMALL_STRONG',
  'TEXT_2XSMALL' = 'TEXT_2XSMALL',
  'TEXT_2XSMALL_STRONG' = 'TEXT_2XSMALL_STRONG',
  'TEXT_XSMALL' = 'TEXT_XSMALL',
  'TEXT_XSMALL_STRONG' = 'TEXT_XSMALL_STRONG',
  'TEXT_SMALL' = 'TEXT_SMALL',
  'TEXT_SMALL_STRONG' = 'TEXT_SMALL_STRONG',
  'TEXT_REGULAR' = 'TEXT_REGULAR',
  'TEXT_REGULAR_STRONG' = 'TEXT_REGULAR_STRONG',
  'TEXT_MEDIUM' = 'TEXT_MEDIUM',
  'TEXT_MEDIUM_STRONG' = 'TEXT_MEDIUM_STRONG',
  'TEXT_LARGE' = 'TEXT_LARGE',
  'TEXT_LARGE_STRONG' = 'TEXT_LARGE_STRONG',
  'TEXT_XLARGE' = 'TEXT_XLARGE',
  'TEXT_XLARGE_STRONG' = 'TEXT_XLARGE_STRONG',
  'TEXT_2XLARGE' = 'TEXT_2XLARGE',
  'TEXT_2XLARGE_STRONG' = 'TEXT_2XLARGE_STRONG',
  'TEXT_3XLARGE' = 'TEXT_3XLARGE',
  'TEXT_3XLARGE_STRONG' = 'TEXT_3XLARGE_STRONG',
}

export const COLORS = {
  ...EBackground,
  ...EMiscellaneous,
  ...EBorder,
  ...EText,
  ...EIcon,
  ...ELink,
  ...EInputColor,
  ...ETab,
  ...EToast,
  ...EBottomSheet,
  ...EProcess,
  ...EButtonColor,
  ...EInputColor,
};

export { FONTS_SIZE, FONTS_WEIGHT, ESpacing };

// export const heightFooter = height(ios ? (isIphoneX ? 9 : 7.5) : 7.5);
// export const heightNavBar = height(ios ? (isIphoneX ? 12.5 : 11.5) : 11.5);
// export const topNavBarIOS = height(ios ? (isIphoneX ? 4 : 1.5) : 1.5);
// // export const heightSearchBar = height(4.5)
// // New design = 48/844 * 100;
// export const heightSearchBar = height(5.68);
// export const androidNavbarHeight = ios
//   ? 0
//   : Dimensions.get('screen').height - Dimensions.get('window').height;
// export const paddingButtonBottom = isIphoneX ? 0 : ios ? height(2) : height(3);
//
export const THEME_MODE = { light: 'light', dark: 'dark' };
export const backgroundBlurStyle = StyleSheet.create({
  dark: { backgroundColor: 'rgba(37,37,37,0.9)' },
  light: { backgroundColor: 'rgba(229, 229, 229, 0.9)' },
  darkMore: { backgroundColor: 'rgba(37,37,37,0.9)' },
  lightMore: { backgroundColor: 'rgba(245, 245, 245, 0.9)' },
});

export const Colors = {
  //New Colors
  ...BACKGROUND.dark,
  ...BORDER_COLORS.dark,
  ...LINK_COLOR.dark,
  ...ICON_COLOR.dark,
  ...TEXT_COLOR.dark,
  ...MISC_COLORS.dark,
  ...INPUT_COLOR.dark,
  ...BUTTON_COLORS.dark,
  ...TOAST.dark,
  ...SHEET_COLORS.dark,
  ...TAB_COLOR.dark,
  ...PROCESS_COLORS.dark,
};

export const ColorsLight = {
  //New Colors
  ...BACKGROUND.light,
  ...BORDER_COLORS.light,
  ...LINK_COLOR.light,
  ...ICON_COLOR.light,
  ...TEXT_COLOR.light,
  ...MISC_COLORS.light,
  ...INPUT_COLOR.light,
  ...BUTTON_COLORS.light,
  ...TOAST.light,
  ...SHEET_COLORS.light,
  ...TAB_COLOR.light,
  ...PROCESS_COLORS.light,
};

export const Font = {
  SEMI_BOLD: 'MiSansLatin-Semibold',
  REGULAR: 'MiSansLatin-Regular',
  MEDIUM: 'MiSansLatin-Medium',
  BOLD: 'MiSansLatin-Bold',
};

// const textTitle = (key: TEXT_TITLE) => {
//   const style = {
//     [TEXT_TITLE.TEXT_TITLE_XSMALL]: StyleSheet.create(
//       (theme: any, rt: any) => ({
//         color: theme.color.TEXT,
//         fontSize: FONTS_SIZE.fontSize225,
//         // lineHeight: LINE_HEIGHT.normal,
//         fontWeight: FONTS_WEIGHT.Semibold,
//         fontFamily: Font.SEMI_BOLD,
//       })
//     ),
//     [TEXT_TITLE.TEXT_TITLE_SMALL]: StyleSheet.create((theme: any, rt: any) => ({
//       color: theme.color.color.TEXT,
//       fontSize: FONTS_SIZE.fontSize250,
//       fontWeight: FONTS_WEIGHT.Semibold,
//       fontFamily: Font.SEMI_BOLD,
//       // lineHeight: LINE_HEIGHT.tight
//     })),
//     [TEXT_TITLE.TEXT_TITLE]: StyleSheet.create((theme: any, rt: any) => ({
//       color: theme.color.color.TEXT,
//       fontSize: FONTS_SIZE.fontSize300,
//       fontWeight: FONTS_WEIGHT.Semibold,
//       fontFamily: Font.SEMI_BOLD,
//       // lineHeight: LINE_HEIGHT.tight
//     })),
//     [TEXT_TITLE.TEXT_TITLE_LARGE]: StyleSheet.create((theme: any, rt: any) => ({
//       color: theme.color.TEXT,
//       fontSize: FONTS_SIZE.fontSize350,
//       // backgroundColor: 'transparent',
//       fontWeight: FONTS_WEIGHT.Semibold,
//       fontFamily: Font.SEMI_BOLD,
//
//       // lineHeight: LINE_HEIGHT.tight
//     })),
//     [TEXT_TITLE.TEXT_TITLE_XLARGE]: StyleSheet.create(
//       (theme: any, rt: any) => ({
//         color: theme.color.TEXT,
//         fontSize: FONTS_SIZE.fontSize400,
//         backgroundColor: 'transparent',
//         fontWeight: FONTS_WEIGHT.Semibold,
//         fontFamily: Font.SEMI_BOLD,
//         // lineHeight: LINE_HEIGHT.tight
//       })
//     ),
//   };
//
//   // @ts-ignore
//   return StyleSheet.create(style[key]);
// };

// export const textUI = (key: TEXT_UI) => {
//   const style = StyleSheet.create((theme: any, rt: any) => ({
//     [TEXT_UI.TEXT_TINY]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize100,
//       fontWeight: FONTS_WEIGHT.Medium,
//       fontFamily: Font.MEDIUM,
//     },
//     [TEXT_UI.TEXT_TINY_STRONG]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize100,
//       fontFamily: Font.SEMI_BOLD,
//       fontWeight: FONTS_WEIGHT.Semibold,
//     },
//     [TEXT_UI.TEXT_3XSMALL]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize125,
//       fontWeight: FONTS_WEIGHT.Medium,
//       fontFamily: Font.MEDIUM,
//     },
//     [TEXT_UI.TEXT_3XSMALL_STRONG]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize125,
//       fontFamily: Font.SEMI_BOLD,
//       fontWeight: FONTS_WEIGHT.Semibold,
//     },
//     [TEXT_UI.TEXT_2XSMALL]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize150,
//       fontWeight: FONTS_WEIGHT.Medium,
//       fontFamily: Font.MEDIUM,
//     },
//     [TEXT_UI.TEXT_2XSMALL_STRONG]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize150,
//       fontFamily: Font.SEMI_BOLD,
//       fontWeight: FONTS_WEIGHT.Semibold,
//     },
//     [TEXT_UI.TEXT_XSMALL]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize162,
//       fontWeight: FONTS_WEIGHT.Medium,
//       fontFamily: Font.MEDIUM,
//     },
//     [TEXT_UI.TEXT_XSMALL_STRONG]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize162,
//       fontFamily: Font.SEMI_BOLD,
//       fontWeight: FONTS_WEIGHT.Semibold,
//     },
//     [TEXT_UI.TEXT_SMALL]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize175,
//       fontWeight: FONTS_WEIGHT.Medium,
//       fontFamily: Font.MEDIUM,
//     },
//     [TEXT_UI.TEXT_SMALL_STRONG]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize175,
//       fontFamily: Font.SEMI_BOLD,
//       fontWeight: FONTS_WEIGHT.Semibold,
//     },
//     [TEXT_UI.TEXT_REGULAR]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize187,
//       fontWeight: FONTS_WEIGHT.Regular,
//       fontFamily: Font.REGULAR,
//     },
//     [TEXT_UI.TEXT_MEDIUM]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize187,
//       fontWeight: FONTS_WEIGHT.Medium,
//       // lineHeight: LINE_HEIGHT.normal,
//     },
//     [TEXT_UI.TEXT_MEDIUM_STRONG]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize187,
//       fontFamily: Font.SEMI_BOLD,
//       fontWeight: FONTS_WEIGHT.Semibold,
//     },
//     [TEXT_UI.TEXT_LARGE]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize200,
//       fontFamily: Font.MEDIUM,
//       fontWeight: FONTS_WEIGHT.Medium,
//     },
//     [TEXT_UI.TEXT_LARGE_STRONG]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize200,
//       fontWeight: FONTS_WEIGHT.Semibold,
//       fontFamily: Font.SEMI_BOLD,
//     },
//     [TEXT_UI.TEXT_REGULAR_STRONG]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize200,
//       fontFamily: Font.MEDIUM,
//       fontWeight: FONTS_WEIGHT.Medium,
//     },
//     [TEXT_UI.TEXT_XLARGE]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize225,
//       fontFamily: Font.MEDIUM,
//       fontWeight: FONTS_WEIGHT.Medium,
//     },
//     [TEXT_UI.TEXT_XLARGE_STRONG]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize225,
//       fontFamily: Font.SEMI_BOLD,
//       fontWeight: FONTS_WEIGHT.Semibold,
//     },
//     [TEXT_UI.TEXT_2XLARGE]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize250,
//       fontWeight: FONTS_WEIGHT.Regular,
//       fontFamily: Font.REGULAR,
//     },
//     [TEXT_UI.TEXT_2XLARGE_STRONG]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize250,
//       fontFamily: Font.SEMI_BOLD,
//       fontWeight: FONTS_WEIGHT.Semibold,
//     },
//     [TEXT_UI.TEXT_3XLARGE]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize300,
//       // lineHeight: LINE_HEIGHT.normal,
//       fontWeight: FONTS_WEIGHT.Medium,
//       fontFamily: Font.MEDIUM,
//     },
//     [TEXT_UI.TEXT_3XLARGE_STRONG]: {
//       color: theme.colors.TEXT,
//       fontSize: FONTS_SIZE.fontSize300,
//       // lineHeight: LINE_HEIGHT.normal,
//       fontFamily: Font.SEMI_BOLD,
//       fontWeight: FONTS_WEIGHT.Semibold,
//     },
//   }));
//
//   // @ts-ignore
//   return StyleSheet.create(style[key]);
// };
//
