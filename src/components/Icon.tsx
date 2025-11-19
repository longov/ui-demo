/**
 * @fileoverview Icon component implementation using IcoMoon font configuration
 */
// @ts-nocheck

import React, { type FC, type JSX } from 'react';
//@ts-expect-error
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { EIcon } from '../Styles/Colors';
import IconElement from './IconElement';

/**
 * Props interface for Icon component
 * @interface IProps
 * @property {string} name - The name of the icon from the IcoMoon font set
 * @property {number} [size=12] - Size of the icon in pt units
 * @property {keyof typeof Colors | string} [color='TEXT'] - Color of the icon
 * @property {keyof typeof Colors | string} [background] - Background color for the icon
 * @property {object | StyleSheet.NamedStyles<any>} [styleCustom] - Custom styles to apply
 * @property {any} [theme] - Theme value for re-rendering icon when theme changes
 */
interface IProps {
  name: string;
  size?: number;
  color?: keyof typeof EIcon | string;
  background?: keyof typeof Colors | string;
  styleCustom?: object | StyleSheet.NamedStyles<any>;
  //for re-rendering icon in setting theme
  theme?: any;
}

/**
 * Icon component that renders custom icons using IcoMoon font configuration
 * Supports custom size, color, background and additional styling
 * @component
 * @param {IProps} props - Component properties
 * @returns {JSX.Element} Rendered icon component
 */
const Icon: FC<IProps> = ({
  name,
  size = convertPxToPt(12),
  color = 'ICON_PRIMARY',
  background,
  style,
}: IProps): JSX.Element => {
  return (
    <View style={[styles.container, style]}>
      {background && (
        <View style={styles.backgroundContainer(size, background)} />
      )}
      <IconElement name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  backgroundContainer: (size, color) => ({
    overflow: 'hidden',
    position: 'absolute',
    borderRadius: rt.screen.width,
    backgroundColor: theme.colors.ICON[color] || theme.colors.ICON.ICON_PRIMARY,
    left: (rt.fontScale * size) / 5,
    top: (rt.fontScale * size) / 5,
    // top: size / 5,
    height: rt.fontScale * (size - size / 3),
    width: rt.fontScale * (size - size / 3),
    // height: height(1)
    // left: width(2.7)
    // top: height(0.5)
  }),
  container: {
    position: 'relative',
  },
}));

export default React.memo(Icon);

// <View style={styles.containerKyc}>
//   <View style={styles.badgeVerified} />
// <Icon name="app_kyc_verified" color={COLORS.TEXT_INFORMATION} size={width(3.5)} />
// </View>
