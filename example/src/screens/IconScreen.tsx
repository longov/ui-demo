// @ts-nocheck

import { StyleSheet } from 'react-native-unistyles';
import { ScrollView, View } from 'react-native';
// @ts-ignore
import { ICON_NAMES } from '@coin98/sdk-ui/src/constants/icon.ts';
import { Icon, Typography } from '@coin98/sdk-ui';

const IconScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {Object.values(ICON_NAMES).map((iconName) => (
          <View style={styles.flexRow} key={iconName}>
            <Icon name={iconName} size={32} style={{ marginVertical: 8 }} />
            <Typography type={'xsmall'}>{iconName || ''}</Typography>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default IconScreen;

const styles = StyleSheet.create((theme: any, rt) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.BACKGROUND.BACKGROUND_APP,
  },
  flexRow: {
    paddingHorizontal: theme.spacing.space200,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
}));
