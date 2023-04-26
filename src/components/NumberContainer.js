import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import Colors from "../util/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    borderRadius: 8,
    padding: width < 380 ? 12 : 24,
    margin: width < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.secondary,
    fontSize: width < 380 ? 25 : 36,
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
