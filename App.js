import React from "react";
import { StyleSheet, Text, View } from "react-native";

//component import
import Passwordchecker from "./components/Passwordchecker";

export default function App() {
  return (
    <View style={styles.container}>
      <Passwordchecker
        formname="Password"
        text1="Minimum 8 characters"
        text2="One uppercase and lowercase character"
        text3="One number"
        text4="One special character"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
