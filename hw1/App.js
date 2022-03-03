import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{ color: 'red', textDecorationLine: 'underline line-through' }}
      >
        This is a text example1
      </Text>
      <Text style={{ color: 'orange', fontFamily: 'Times New Roman' }}>
        This is a text example2
      </Text>
      <Text style={{ color: 'yellow', fontSize: 30 }}>
        This is a text example3
      </Text>
      <Text style={{ color: 'green', textAlign: 'right' }}>
        This is a text example4
      </Text>
      <Text style={{ color: 'blue', textAlign: 'center' }}>
        This is a text example5
      </Text>
      <Text
        style={{
          color: 'indigo',
          textShadowOffset: { height: 2000, width: 3000 },
          fontWeight: 'bold',
          fontSize: 45,
        }}
      >
        This is a text example6
      </Text>
      <Text style={{ color: 'violet', textTransform: 'uppercase' }}>
        This is a text example7
      </Text>
      <Text style={{ fontWeight: 'bold' }}>This is a text example8</Text>
      <Text style={{ textDecorationLine: 'underline' }}>
        This is a text example9
      </Text>
      <Text style={{ fontStyle: 'italic' }}>This is a text example10</Text>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
