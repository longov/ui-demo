/**
 * @fileoverview Icon component implementation using IcoMoon font configuration
 */
// @ts-nocheck

import React, { type FC, type JSX } from 'react';
import coin98FontConfig from '../assets/fonts/selection.json';
//@ts-expect-error
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { useUnistyles } from 'react-native-unistyles';
import { EText } from '../Styles/Colors';

const Coin98 = createIconSetFromIcoMoon(
  coin98FontConfig,
  'icomoon',
  'icomoon.ttf'
);

/**
 * Props interface for Icon component
 * @interface IProps
 * @property {string} name - The name of the icon from the IcoMoon font set
 * @property {number} [size=12] - Size of the icon in pt units
 * @property {keyof typeof Colors | string} [color='TEXT'] - Color of the icon
 */
interface IProps {
  name: string;
  size?: number;
  color?: keyof typeof EText | string;
}

/**
 * Icon component that renders custom icons using IcoMoon font configuration
 * Supports custom size, color, background and additional styling
 * @component
 * @param {IProps} props - Component properties
 * @returns {JSX.Element} Rendered icon component
 */
const IconElement: FC<IProps> = ({
  name,
  size = 12,
  color = 'TEXT_PRIMARY',
}: IProps): JSX.Element => {
  const { theme } = useUnistyles();
  return (
    <Coin98 name={name} size={size} color={theme.colors.ICON[color] || color} />
  );
};

export default React.memo(IconElement);

// <View style={styles.containerKyc}>
//   <View style={styles.badgeVerified} />
// <Icon name="app_kyc_verified" color={COLORS.TEXT_INFORMATION} size={width(3.5)} />
// </View>
