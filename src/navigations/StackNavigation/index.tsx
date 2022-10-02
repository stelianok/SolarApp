import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../../screens/IntroScreen';
import Home from '../../screens/MainTabs/Home';
import OnBoarding from '../../screens/OnBoarding';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Introduction" component={IntroScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
