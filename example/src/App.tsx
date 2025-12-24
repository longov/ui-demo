//@ts-nocheck
import { StyleSheet } from 'react-native-unistyles';
import '@coin98/sdk-ui/unistyles';
import HomeScreen from './screens/HomeScreen.tsx';
import IconScreen from './screens/IconScreen.tsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';
import TokenScreen from './screens/TokenScreen.tsx';

function App() {
  const RootStack = createNativeStackNavigator({
    initialRouteName: 'Home',
    // screenOptions:{ headerShown: false },
    screens: {
      Home: HomeScreen,
      IconScreen: IconScreen,
      TokenScreen: TokenScreen,
    },
  });

  const Navigation = createStaticNavigation(RootStack);

  return <Navigation />;
}

export default App;

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
