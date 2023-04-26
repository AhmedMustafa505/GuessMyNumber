import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../util/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionsStyle, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionsStyle: {
    fontSize: 24,
    color: Colors.secondary,
    fontFamily: "open-sans",
  },
});

export default InstructionText;
