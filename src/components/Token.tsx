/**
 * @fileoverview Token component for rendering cryptocurrency token icons with chain indicators
 * @module Layout/Token
 */
import { type FC } from 'react';
import { View } from 'react-native';

import ImageRender from './ImageRender';
import _ from 'lodash';
import genSelectedChain from '../utils/genSelectedChain';
import { COLORS } from '../Styles';
import EBorderSize from '../Styles/borderSize';
import BorderSize from '../Styles/borderSize';
import AWS_CHAINS from '../constants/awsChainImage';
import genAssetERC20 from '../utils/genAssetERC20';
import Typography from './Typography';
import { StyleSheet } from 'react-native-unistyles';

/**
 * Available token size presets in pt units
 * @enum {number}
 */
enum TOKEN_SIZE {
  tiny = 12,
  xSmall = 16,
  small = 24,
  medium = 32,
  large = 40,
  xLarge = 48,
}

/** Valid token size keys from TOKEN_SIZE enum */
type SizeKey = keyof typeof TOKEN_SIZE;

/**
 * Token component properties
 */
interface IToken {
  /** Token data object containing address and chain information */
  token: any;
  /** Whether to display the chain logo */
  isShowChain?: boolean;
  /** Size preset for the token icon */
  size?: SizeKey;
  /** Divisor to calculate chain logo size relative to token size */
  chainSizeDivide?: number;
  /** Additional styles for chain logo */
  styleChainLogo?: any;

  /** Additional style for token */
  styleToken?: any;
}

const Token: FC<IToken> = ({
  token,
  isShowChain,
  size = 'xLarge',
  chainSizeDivide = 2.5,
  styleChainLogo,
  styleToken,
}) => {
  styles.useVariants({
    size,
  });
  const selectedChain = genSelectedChain(token);

  return (
    <View style={[styles.container, styleToken, styles.tokenWidth]}>
      <ImageRender
        errors={{
          check: true,
          token: _.pick(token, ['address', 'chain']),
          default: (
            <View style={[styles.tokenImgDefault, styles.token]}>
              <Typography type={'medium'}>
                {_.get(
                  token,
                  'symbol',
                  _.get(token, 'info.symbol', '?')
                ).charAt(0)}
              </Typography>
            </View>
          ),
        }}
        uri={genAssetERC20(token)}
        style={styles.token}
      />

      {isShowChain &&
        (_.get(token, 'address') || _.get(selectedChain, 'isL2')) && (
          <View
            style={[
              styles.smallLogoView,
              styleChainLogo && styleChainLogo,
              styles.chainLogo(chainSizeDivide),
            ]}
          >
            <ImageRender
              uri={AWS_CHAINS(token.chain)}
              style={styles.chainLogo(chainSizeDivide)}
            />
          </View>
        )}
    </View>
  );
};

/**
 * Styles for Token component
 * @constant
 */
const styles = StyleSheet.create((theme) => ({
  tokenBackground: {
    borderRadius: EBorderSize.small,
    backgroundColor: COLORS.BACKGROUND_3,
  },
  container: {
    position: 'relative',
  },

  smallLogoView: {
    position: 'absolute',
    bottom: -theme.spacing.space50,
    right: -theme.spacing.space50,
    backgroundColor: COLORS.BACKGROUND_1,
    padding: theme.spacing.space12,
  },
  tokenImgDefault: {
    backgroundColor: COLORS.BACKGROUND_3,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tokenWidth: {
    variants: {
      size: {
        tiny: {
          width: TOKEN_SIZE.tiny,
        },
        xSmall: {
          width: TOKEN_SIZE.xSmall,
        },
        small: {
          width: TOKEN_SIZE.small,
        },
        medium: {
          width: TOKEN_SIZE.medium,
        },
        large: {
          width: TOKEN_SIZE.large,
        },
        xLarge: {
          width: TOKEN_SIZE.xLarge,
        },
      },
    },
  },
  token: {
    variants: {
      size: {
        tiny: {
          width: TOKEN_SIZE.tiny,
          borderRadius: BorderSize.circle,
          height: TOKEN_SIZE.tiny,
        },
        xSmall: {
          width: TOKEN_SIZE.xSmall,
          borderRadius: BorderSize.circle,
          height: TOKEN_SIZE.xSmall,
        },
        small: {
          width: TOKEN_SIZE.small,
          borderRadius: BorderSize.circle,
          height: TOKEN_SIZE.small,
        },
        medium: {
          width: TOKEN_SIZE.medium,
          borderRadius: BorderSize.circle,
          height: TOKEN_SIZE.medium,
        },
        large: {
          width: TOKEN_SIZE.large,
          borderRadius: BorderSize.circle,
          height: TOKEN_SIZE.large,
        },
        xLarge: {
          width: TOKEN_SIZE.xLarge,
          borderRadius: BorderSize.circle,
          height: TOKEN_SIZE.xLarge,
        },
      },
    },
  },
  chainLogo: (sizeVarian: number) => ({
    variants: {
      size: {
        tiny: {
          width: TOKEN_SIZE.tiny / sizeVarian,
          height: TOKEN_SIZE.tiny / sizeVarian,
          borderRadius: TOKEN_SIZE.tiny / (sizeVarian * 4),
        },
        xSmall: {
          width: TOKEN_SIZE.xSmall / sizeVarian,
          height: TOKEN_SIZE.xSmall / sizeVarian,
          borderRadius: TOKEN_SIZE.xSmall / (sizeVarian * 4),
        },
        small: {
          width: TOKEN_SIZE.small / sizeVarian,
          height: TOKEN_SIZE.small / sizeVarian,
          borderRadius: TOKEN_SIZE.small / (sizeVarian * 4),
        },
        medium: {
          width: TOKEN_SIZE.medium / sizeVarian,
          height: TOKEN_SIZE.medium / sizeVarian,
          borderRadius: TOKEN_SIZE.medium / (sizeVarian * 4),
        },
        large: {
          width: TOKEN_SIZE.large / sizeVarian,
          height: TOKEN_SIZE.large / sizeVarian,
          borderRadius: TOKEN_SIZE.large / (sizeVarian * 4),
        },
        xLarge: {
          width: TOKEN_SIZE.xLarge / sizeVarian,
          height: TOKEN_SIZE.xLarge / sizeVarian,
          borderRadius: TOKEN_SIZE.xLarge / (sizeVarian * 4),
        },
      },
    },
  }),
}));

export default Token;
