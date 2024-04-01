import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
        ></TextInput>
        <Button title="Add Goal"></Button>
      </View>
      <View>
        <Text>List Of Goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16, // add horizontal padding
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // make button not stretched to fit the height
    paddingBottom: 24, // create border with bottom padding
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    width: "70%", // decrease text input width
    marginRight: 8,
    padding: 8,
  },
});
