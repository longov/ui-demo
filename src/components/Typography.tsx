//@ts-nocheck
import React from 'react';
import type { PropsWithChildren } from 'react';
import { Text } from 'react-native';
// @ts-ignore
import { StyleSheet } from 'react-native-unistyles';
// @ts-ignore
import type { UnistylesVariants } from 'react-native-unistyles';

interface TypographyProps
  extends PropsWithChildren,
    UnistylesVariants<typeof styles> {
  value: number;
  color?: string;
}

export const Typography: React.FunctionComponent<TypographyProps> = ({
  children,
  size,
  isBold = false,
  isCentered = false,
  isPrimary,
  value,
  color,
}) => {
  styles.useVariants({
    isBold,
    isCentered,
    isPrimary,
    size,
  });

  return (
    <Text style={[styles.title(value), styles.color(color)]}>{children}</Text>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  title: (value: number) => ({
    variants: {
      isBold: {
        true: {
          fontWeight: 'bold',
        },
      },
      isCentered: {
        true: {
          textAlign: 'center',
        },
      },
      isPrimary: {
        true: {
          color: theme.colors.accent,
        },
        default: {
          color: theme.colors.typography,
        },
      },
      size: {
        small: {
          fontSize: rt.fontScale * 10 * value,
        },
        large: {
          fontSize: rt.fontScale * 30 * value,
        },
        default: {
          fontSize: rt.fontScale * 20 * value,
        },
      },
    },
    compoundVariants: [
      {
        isPrimary: true,
        isBold: true,
        styles: {
          color: theme.colors.TEXT.TEXT,
        },
      },
    ],
  }),
  color: (_color: string) => ({
    color: theme.colors.TEXT[_color] || theme.colors.TEXT.TEXT,
  }),
}));
