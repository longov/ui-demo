//@ts-nocheck
import { Pressable, View } from 'react-native';
import { COLORS, Typography, Icon, Button } from '@coin98/sdk-ui';
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
          style={[style1, style2]}
          color={COLORS.TEXT_PRIMARY}
          type={'xlarge'}
          isCentered={true}
          isStrong={true}
        >
          dark Theme
        </Typography>
      </Pressable>
      <Icon name="ic98" size={20} color={COLORS.ICON_BRAND} />
      <Button
        onPress={() => {}}
        level={'primary'}
        style={styles.button}
        size={'xsmall'}
        title={'Submit'}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme: any, rt) => ({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.BACKGROUND.BACKGROUND_APP,
    paddingTop: rt.insets.top,
    transform: [
      {
        translateY: rt.insets.ime * -1,
      },
    ],
  },
  button: {
    width: rt.screen.width - 2 * theme.spacing.space200,
    marginHorizontal: theme.spacing.space200,
  },
  text: {
    color: theme.colors.TEXT.TEXT_ERROR,
  },
}));

const style1 = {
  color: 'blue',
};

const style2 = {
  fontSize: 22,
};
