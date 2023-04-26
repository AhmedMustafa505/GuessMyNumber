import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";
import Title from "../components/Title";
import Colors from "../util/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlihgt}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlihgt}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: width < 380 ? 75 : 150,
    width: width < 380 ? 150 : 300,
    height: width < 380 ? 150 : 300,
    overflow: "hidden",
    color: Colors.primary800,
    borderWidth: 3,
    margin: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlihgt: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

export default GameOverScreen;
