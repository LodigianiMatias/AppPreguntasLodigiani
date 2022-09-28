import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppNavigator from './src/navigation';

export default function App() {

  const [loaded] = useFonts({
    'Candy': require('./assets/fonts/Candy.ttf'),
    'Bungee': require('./assets/fonts/Bungee.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  });

  if(!loaded) {
    return <ActivityIndicator/>
  }


  return (
    <AppNavigator/>
  );
}


