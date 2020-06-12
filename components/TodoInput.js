import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export const TodoInput = props => {
  const [todo, setTodo] = useState();

  const handleTextChange = value => setTodo(value);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add a todo item"
        style={styles.input}
        onChangeText={handleTextChange}
        value={todo}
      />
      <Button title="press" onPress={props.handleButtonPress(todo)} />
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
