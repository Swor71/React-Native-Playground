import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

export const TodoInput = props => {
  const [todo, setTodo] = useState();

  const handleTextChange = value => setTodo(value);

  return (
    <Modal visible={props.isModalActive} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a todo item"
          style={styles.input}
          onChangeText={handleTextChange}
        />
        <View style={styles.buttonContainer}>
          <Button title="add a todo" onPress={props.handleButtonPress(todo)} />
          <Button
            title="cancel"
            color="maroon"
            onPress={props.handleShowModal}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 5,
    width: "70%",
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});
