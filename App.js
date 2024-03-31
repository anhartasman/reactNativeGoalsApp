import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another piece of text</Text>
      </View>
      <Text
        style={styles.dummyText}
      >
        Opened up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <Button title="Click here" />
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
  dummyText: {
    margin:16,
    padding:16,
    borderWidth:2,
    borderColor:'red',
  }
});
