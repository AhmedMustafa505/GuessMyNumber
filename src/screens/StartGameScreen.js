import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
  Text,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../util/colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(text) {
    setEnteredNumber(text);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: setEnteredNumber(""),
        },
      ]);
      return;
    } else {
      onPickNumber(chosenNumber);
    }
  }
  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText style={styles.instructionsStyle}>
          Enter a Number
        </InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => setEnteredNumber("")}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
    color: Colors.secondary,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
    alignSelf: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default StartGameScreen;
