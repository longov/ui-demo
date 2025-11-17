import { Pressable, type PressableStateCallbackType, View } from 'react-native';
import { Typography, COLORS } from '@coin98/sdk-ui';
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
  secondProp: {
    backgroundColor: theme.colors.backgroundColor,
  },
  thirdProp: {
    backgroundColor: rt.isPortrait ? 'blue' : 'green',
  },
  input: {
    height: 50,
    borderWidth: 1,
    width: '100%',
    padding: theme.gap(2),
    borderRadius: theme.gap(1),
    borderColor: theme.colors.typography,
    marginBottom: rt.insets.bottom + 10,
  },
  animated: {
    width: 100,
    height: 100,
    opacity: 0.79,
    borderWidth: 1,
    marginBottom: theme.gap(3),
    borderColor: theme.colors.typography,
    backgroundColor: rt.colorScheme === 'dark' ? 'red' : 'blue',
  },
  blurhash: {
    height: 100,
    width: 100,
    borderWidth: 5,
    borderColor: theme.colors.test,
  },
  blurhashWithColor: (color: Record<string, string>) => ({
    height: 100,
    width: 100,
    borderWidth: 5,
    borderColor: rt.colorScheme === 'dark' ? color.dark : color.light,
  }),
  imageBackground: (color: Record<string, string>) => ({
    height: 100,
    width: 100,
    borderWidth: 5,
    borderColor: rt.colorScheme === 'dark' ? color.dark : color.light,
  }),
  scrollView: {
    width: '100%',
    backgroundColor: theme.colors.accent,
  },
  row: {
    flexDirection: 'row',
  },
  contentContainerStyle: {
    transform: [
      {
        translateX: rt.colorScheme === 'dark' ? 100 : 200,
      },
    ],
  },
  scrollViewText: {
    color: theme.colors.typography,
  },
  text: {
    fontSize: 30,
    lineHeight: 40,
    color: theme.colors.typography,
  },
  other: {
    height: 100,
    width: 100,
    backgroundColor: theme.colors.aloes,
  },
  pressable: (event: PressableStateCallbackType, times: number) => ({
    backgroundColor: !event.pressed
      ? theme.colors.accent
      : theme.colors.backgroundColor,
    marginBottom: rt.insets.bottom * times,
  }),
  scoped: {
    color: theme.colors.accent,
    backgroundColor: theme.colors.backgroundColor,
  },
  scopedFn: () => ({
    color: theme.colors.accent,
    backgroundColor: theme.colors.backgroundColor,
  }),
}));
