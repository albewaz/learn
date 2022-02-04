import React from "react";
import { StyleSheet, View, Text } from "react-native";

function App() {
  let counter = 0;
  const immutable = 3.14;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{counter}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textContainer: {
    width: "100%",
    height: "20%",
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 22,
    fontWeight: "bold"
  }
});

export default App;
