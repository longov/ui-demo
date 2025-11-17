import { Pressable, View } from 'react-native';
import { COLORS, Typography } from '@coin98/sdk-ui';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import '@coin98/sdk-ui/src/unistyles';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color={COLORS.TEXT_BRAND} isBold value={1.5}>
        Keyboard insets
      </Typography>
      <Pressable onPress={() => UnistylesRuntime.setTheme('light')}>
        <Typography color={COLORS.TEXT} isBold value={1.5}>
          light Theme
        </Typography>
      </Pressable>
      <Pressable onPress={() => UnistylesRuntime.setTheme('dark')}>
        <Typography color={COLORS.TEXT} isBold value={1.5}>
          dark Theme
        </Typography>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create((theme: any, rt) => ({
  container: {
    flex: 1,
    alignItems: 'center',
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
}));
