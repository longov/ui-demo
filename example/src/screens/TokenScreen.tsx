// @ts-nocheck

import { StyleSheet } from 'react-native-unistyles';
import { View } from 'react-native';
import { Token, Typography } from '@coin98/sdk-ui';

export const tokenUSDC = {
  address: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
  chain: 'arbitrum',
  cgkId: 'usd-coin',
  image: 'https://coin98.s3.amazonaws.com/ExOAym04R7Ckps1H',
  isVaultCoin: true,
  name: 'USDC',
  symbol: 'usdc',
  current_price: '0.999816',
  marketInfo: {
    current_price: '0.999816',
  },
  decimals: 6,
};

const TokenScreen = () => {
  return (
    <View style={styles.container}>
      <Token token={tokenUSDC} size={'small'} />
      <Typography type={'small'}>1231232</Typography>
    </View>
  );
};

export default TokenScreen;

const styles = StyleSheet.create((theme: any, rt) => ({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  flexRow: {
    paddingHorizontal: theme.spacing.space200,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
}));
