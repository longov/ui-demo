//@ts-nocheck
import { Pressable, View } from 'react-native';
import { COLORS, Typography } from '@coin98/sdk-ui';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import '@coin98/sdk-ui/unistyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color={COLORS.TEXT_BRAND} value={1.5}>
        Keyboard insets
      </Typography>
      <Pressable onPress={() => UnistylesRuntime.setTheme('light')}>
        <Typography color={COLORS.TEXT_PRIMARY} type={'xsmall'} isStrong={true}>
          light Theme
        </Typography>
      </Pressable>
      <Pressable onPress={() => UnistylesRuntime.setTheme('dark')}>
        <Typography
          style={styles.text}
          color={COLORS.TEXT_PRIMARY}
          type={'xlarge'}
          isCentered={true}
          isStrong={true}
        >
          dark Theme
        </Typography>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create((theme: any, rt) => ({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.backgroundColor,
    paddingHorizontal: theme.gap(2),
    paddingTop: rt.insets.top,
    transform: [
      {
        translateY: rt.insets.ime * -1,
      },
    ],
  },
  text: {
    color: theme.colors.TEXT.TEXT_ERROR,
  },
}));
