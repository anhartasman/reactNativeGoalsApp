import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {courseGoals.map((goal) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText} key={goal}>
                {goal}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // use flex so it will takes all the space
    paddingTop: 50,
    paddingHorizontal: 16, // add horizontal padding
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // make button not stretched to fit the height
    marginBottom: 24, // rename to margin bottom
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
  goalsContainer: {
    flex: 4, // set flex to 4/5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
