import React from "react";
import { Dimensions, StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: width < 370 ? 20 : 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "70%",
    width: 300,
  },
});

export default Title;
