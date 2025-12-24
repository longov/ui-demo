// @ts-nocheck
import { Dimensions, Platform, Pressable, View } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { useNavigation } from '@react-navigation/native';
import { FasterImageView } from '@candlefinance/faster-image';
import { COLORS, Typography, Button } from '@coin98/sdk-ui';

const size = Dimensions.get('window').width / 3;
function HomeScreen() {
  const navigation = useNavigation<any>();
  const onGoToScreen = (route: string) => () => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => UnistylesRuntime.setTheme('light')}>
        <Typography color={COLORS.TEXT_PRIMARY} type={'xsmall'} isStrong={true}>
          light Theme
        </Typography>
      </Pressable>
      <Pressable onPress={() => UnistylesRuntime.setTheme('dark')}>
        <Typography
          color={COLORS.TEXT_PRIMARY}
          type={'xlarge'}
          isCentered={true}
          isStrong={true}
        >
          dark Theme
        </Typography>
      </Pressable>
      <Pressable onPress={onGoToScreen('IconScreen')}>
        <Typography type={'medium'} isStrong>
          Go to Icon Screen
        </Typography>
      </Pressable>
      <Button
        onPress={() => {}}
        title={'1121'}
        size={'medium'}
        level={'primary'}
      />

      <FasterImageView
        onError={(event) => console.warn(event.nativeEvent.error)}
        style={styles.image}
        onSuccess={(event) => {
          console.log(event.nativeEvent);
        }}
        source={{
          transitionDuration: 0.3,
          borderTopLeftRadius:
            Platform.OS === 'android' ? size : (size - 16) / 2,
          borderBottomRightRadius:
            Platform.OS === 'android' ? size / 1.5 : (size - 16) / 3,
          cachePolicy: 'discWithCacheControl',
          showActivityIndicator: true,
          url: 'https://picsum.photos/200/200?random=0',
          grayscale: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.BACKGROUND.BACKGROUND_APP,
  },
  image: {
    width: size - 16,
    height: size - 16,
    borderTopLeftRadius: (size - 16) / 2,
    borderBottomRightRadius: (size - 16) / 2,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
}));

export default HomeScreen;
