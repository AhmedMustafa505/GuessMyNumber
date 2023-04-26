import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../util/colors";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 20,
    marginTop: width < 380 ? 15 : 30,
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
});

export default Card;
