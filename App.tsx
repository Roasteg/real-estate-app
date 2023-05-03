import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartScreen from './screens/start/StartScreen';

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <StatusBar style="auto" />
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
