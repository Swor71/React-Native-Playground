import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export const TodoInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add a todo item"
        style={styles.input}
        onChangeText={props.handleTextChange}
        value={props.todo}
      />
      <Button title="press" onPress={props.handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 5,
    width: "70%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
