import { Dimensions, PixelRatio, Platform } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

const MYWIDTH = Dimensions.get('window').width;
const MYHEIGHT = Dimensions.get('window').height;

export const isIphoneX = Platform.OS === 'ios' && MYHEIGHT >= 812;
export const ios = Platform.OS === 'ios';

export const width = (num: any) =>
  PixelRatio.roundToNearestPixel(MYWIDTH * (num / 100));

export const convertPxToPt = (px: number) => {
  return width((px / 390) * 100);
};
export const height = (num: number) =>
  PixelRatio.roundToNearestPixel(MYHEIGHT * (num / 100));

export const topNavBarIOS = height(
  Platform.OS === 'ios' ? (isIphoneX ? 4 : 1.5) : 1.5
);

export function isUnistyles(style: any): boolean {
  if (!style) {
    return false;
  }
  const styleKeys = Object.keys(style);
  const hasUnistylesKey = styleKeys.some((key) => key.includes('unistyles_'));
  return !!hasUnistylesKey;
}

export const guardUnistyles = (style: any): any => {
  if (!style) {
    return undefined;
  }
  if (Array.isArray(style)) {
    return style.map((s: any) => guardUnistyles(s));
  }
  if (isUnistyles(style)) {
    return style;
  }
  const convertedStyle = { ...style };
  const data = styles.newStyle(convertedStyle);
  return data;
};

const styles = StyleSheet.create((_theme, rt) => ({
  newStyle: (style: any) => ({
    ...style,
    ...(style.fontSize && {
      fontSize: rt.fontScale * style.fontSize,
    }),
  }),
}));
