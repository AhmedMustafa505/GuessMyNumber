import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../util/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionsStyle, style]}>{children}</Text>;
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  instructionsStyle: {
    fontSize: width < 380 ? 20 : 24,
    color: Colors.secondary,
    fontFamily: "open-sans",
  },
});

export default InstructionText;
