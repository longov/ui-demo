// @ts-nocheck
import React, { type PropsWithChildren, type ReactNode, useState } from 'react';
import { Pressable, View } from 'react-native';
import { Typography } from './Typography';
import { StyleSheet, type UnistylesVariants } from 'react-native-unistyles';
import { guardUnistyles } from '../Styles/utils';

/** Button height measurements in PT units */
/** Available button size variants */
type Size = 'tiny' | 'xsmall' | 'small' | 'medium' | 'large';
/** Button importance level variants */
type Level = 'primary' | 'secondary';
/** Button style variants */
type Kind = 'default' | 'inverse' | 'ghost';

/**
 * Props for Button component
 */
interface ButtonProps {
  /** Button text content */
  title?: string;
  /** Size variant from ButtonSize enum */
  size?: Size;
  /** Whether to show loading animation */
  loading?: boolean;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Visual importance level */
  level?: Level;
  /** Visual style variant */
  kind?: Kind;
  /** Button press handler */
  onPress: any;

  /** Additional custom styles */
  style?: object;

  /** Additional custom styles */
  textStyle?: any;

  prefixComponent?: ReactNode;

  endComponent?: ReactNode;
}

/**
 * A customizable button component that supports different sizes, styles and states
 * @component
 * @example
 * <Button
 *   title="Submit"
 *   size="medium"
 *   level="primary"
 *   onPress={() => console.log('Pressed')}
 * />
 */

interface ButtonProps
  extends PropsWithChildren,
    UnistylesVariants<typeof styles> {
  kind?: Kind;
  level?: Level;
  title?: string;
  size?: Size;
  loading?: boolean;
  disabledPressBehavior?: boolean;
  disabled?: boolean;
  style?: any;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  size = 'medium',
  loading = false,
  disabled = false,
  level = 'primary',
  kind = 'default',
  disabledPressBehavior,
  prefixComponent,
  endComponent,
  style,
  textStyle: textSt,
  onPress,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  styles.useVariants({
    level,
    kind,
    status: disabled ? 'disabled' : isPressed ? 'active' : 'default',
    size,
  });

  const _UniStylesButton = guardUnistyles(style);
  const _UniStylesText = guardUnistyles(textSt);

  const onPressButton = () => {
    if (disabled) return;
    onPress && onPress();
  };
  const onPressAction = (action: boolean) => () => {
    if (disabledPressBehavior) return;
    setIsPressed(action);
  };

  // @ts-ignore
  // @ts-ignore
  return (
    <Pressable
      onPress={onPressButton}
      disabled={disabled}
      onPressIn={onPressAction(true)}
      onPressOut={onPressAction(false)}
      style={[
        styles.buttonContainer,
        styles.buttonVariant,
        styles.sizeVariant,
        _UniStylesButton,
      ]}
    >
      {loading ? (
        <View />
      ) : (
        // <LottieView
        //   style={{
        //     width: iconSize * 1.5,
        //     height: iconSize * 1.5,
        //   }}
        //   source={images.subLoading}
        //   autoPlay
        //   loop
        // />
        <>
          {prefixComponent && prefixComponent}
          {title && (
            // @ts-ignore
            <Typography
              type={size}
              isStrong
              style={[styles.textStyle, _UniStylesText]}
            >
              {title}
            </Typography>
          )}
          {endComponent && endComponent}
        </>
      )}
      {/*{get(options, 'icon') && <View style={[styles.paddingIcon, get(options, 'iconStyle')]}>{get(options, 'icon')}</View>}*/}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create((theme, rt) => ({
  buttonContainer: {
    width: rt.screen.width * 0.9,
    flexDirection: 'row',
    justifyContent: 'center',
    // marginBottom: GapSize.medium,
    alignItems: 'center',
    height: rt.fontScale * 32,
    borderRadius: 9999,
  },
  buttonVariant: {
    variants: {
      kind: {
        default: {},
        inverse: {},
        ghost: {},
      },
      level: {
        primary: {},
        secondary: {},
      },
      status: {
        active: {},
        default: {},
        disabled: {},
      },
    },
    compoundVariants: [
      {
        kind: 'default',
        level: 'primary',
        status: 'active',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_PRIMARY_FILL_ACTIVE,
        },
      },
      {
        kind: 'default',
        level: 'primary',
        status: 'default',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_PRIMARY_FILL,
        },
      },
      {
        kind: 'default',
        level: 'secondary',
        status: 'active',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_SECONDARY_FILL,
        },
      },
      {
        kind: 'default',
        level: 'secondary',
        status: 'default',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_PRIMARY_FILL_ACTIVE,
        },
      },
      {
        kind: 'inverse',
        level: 'primary',
        status: 'active',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_SECONDARY_INV_FILL_ACTIVE,
        },
      },
      {
        kind: 'inverse',
        level: 'primary',
        status: 'default',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_DISABLE_INV_FILL,
        },
      },
      {
        kind: 'inverse',
        level: 'secondary',
        status: 'active',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_SECONDARY_INV_FILL_ACTIVE,
        },
      },
      {
        kind: 'inverse',
        level: 'secondary',
        status: 'default',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_SECONDARY_INV_FILL,
        },
      },
      {
        kind: 'ghost',
        level: 'primary',
        status: 'active',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_GHOST_PRIMARY_FILL_ACTIVE,
        },
      },
      {
        kind: 'ghost',
        level: 'primary',
        status: 'default',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_GHOST_PRIMARY_FILL,
        },
      },
      {
        kind: 'ghost',
        level: 'secondary',
        status: 'active',
        styles: {
          backgroundColor:
            theme.colors.BUTTON.BUTTON_GHOST_SECONDARY_FILL_ACTIVE,
        },
      },
      {
        kind: 'ghost',
        level: 'secondary',
        status: 'default',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_GHOST_SECONDARY_FILL,
        },
      },
      {
        kind: 'default',
        status: 'disabled',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_DISABLE_FILL,
        },
      },
      {
        kind: 'inverse',
        status: 'disabled',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_DISABLE_INV_FILL,
        },
      },
      {
        kind: 'ghost',
        status: 'disabled',
        styles: {
          backgroundColor: theme.colors.BUTTON.BUTTON_GHOST_PRIMARY_FILL,
        },
      },
    ],
  },
  sizeVariant: {
    variants: {
      size: {
        tiny: {
          gap: rt.fontScale * 4,
          height: rt.fontScale * 24,
        },
        xSmall: {
          gap: rt.fontScale * 6,
          height: rt.fontScale * 32,
        },
        small: {
          gap: rt.fontScale * 8,
          height: rt.fontScale * 40,
        },
        medium: {
          gap: rt.fontScale * 8,
          height: rt.fontScale * 48,
        },
        large: {
          gap: rt.fontScale * 8,
          height: rt.fontScale * 56,
        },
      },
    },
  },
  textStyle: {
    variants: {
      size: {
        tiny: {
          fontSize: rt.fontScale * 12,
        },
        xsmall: {
          fontSize: rt.fontScale * 14,
        },
        small: {
          fontSize: rt.fontScale * 16,
        },
        medium: {
          fontSize: rt.fontScale * 18,
        },
        large: {
          fontSize: rt.fontScale * 20,
        },
      },
      kind: {
        default: {},
        inverse: {},
        ghost: {},
      },
      level: {
        primary: {},
        secondary: {},
      },
      status: {
        active: {},
        default: {},
        disabled: {},
      },
    },
    compoundVariants: [
      {
        kind: 'default',
        level: 'primary',
        status: 'active',
        styles: {
          color: theme.colors.BUTTON.BUTTON_PRIMARY_TEXT,
        },
      },
      {
        kind: 'default',
        level: 'primary',
        status: 'default',
        styles: {
          color: theme.colors.BUTTON.BUTTON_PRIMARY_TEXT,
        },
      },
      {
        kind: 'default',
        level: 'secondary',
        status: 'active',
        styles: {
          color: theme.colors.BUTTON.BUTTON_SECONDARY_TEXT,
        },
      },
      {
        kind: 'default',
        level: 'secondary',
        status: 'default',
        styles: {
          color: theme.colors.BUTTON.BUTTON_SECONDARY_TEXT,
        },
      },
      {
        kind: 'inverse',
        level: 'primary',
        status: 'active',
        styles: {
          color: theme.colors.BUTTON.BUTTON_GHOST_PRIMARY_TEXT,
        },
      },
      {
        kind: 'inverse',
        level: 'primary',
        status: 'default',
        styles: {
          color: theme.colors.BUTTON.BUTTON_GHOST_PRIMARY_TEXT,
        },
      },
      {
        kind: 'inverse',
        level: 'secondary',
        status: 'active',
        styles: {
          color: theme.colors.BUTTON.BUTTON_DISABLE_INV_TEXT,
        },
      },
      {
        kind: 'inverse',
        level: 'secondary',
        status: 'default',
        styles: {
          color: theme.colors.BUTTON.BUTTON_DISABLE_INV_TEXT,
        },
      },
      {
        kind: 'ghost',
        level: 'primary',
        status: 'active',
        styles: {
          color: theme.colors.BUTTON.BUTTON_GHOST_PRIMARY_TEXT,
        },
      },
      {
        kind: 'ghost',
        level: 'primary',
        status: 'default',
        styles: {
          color: theme.colors.BUTTON.BUTTON_GHOST_PRIMARY_TEXT,
        },
      },
      {
        kind: 'ghost',
        level: 'secondary',
        status: 'active',
        styles: {
          color: theme.colors.BUTTON.BUTTON_GHOST_SECONDARY_TEXT,
        },
      },
      {
        kind: 'ghost',
        level: 'secondary',
        status: 'default',
        styles: {
          color: theme.colors.BUTTON.BUTTON_GHOST_SECONDARY_TEXT,
        },
      },
      {
        kind: 'default',
        status: 'disabled',
        styles: {
          color: theme.colors.BUTTON.BUTTON_DISABLE_TEXT,
        },
      },
      {
        kind: 'inverse',
        status: 'disabled',
        styles: {
          color: theme.colors.BUTTON.BUTTON_DISABLE_INV_TEXT,
        },
      },
      {
        kind: 'ghost',
        status: 'disabled',
        styles: {
          color: theme.colors.BUTTON.BUTTON_DISABLE_TEXT,
        },
      },
    ],
  },
}));
