import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Text1</Text>
      <Text>Text2</Text>
      <Text>Text3</Text>
      <Text>Text4</Text>
      <Text>Text5</Text>
      <Text>Text6</Text>
      <Text>Text7</Text>
      <Text>Text8</Text>
      <Text>Text9</Text>
      <Text>Text10</Text>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
