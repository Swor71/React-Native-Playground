import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const TodoListItem = props => {
  return (
    <TouchableOpacity onPress={props.onDeleteItem(props.item.key)}>
      <View style={styles.todoItem}>
        <Text>{props.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    marginVertical: 5,
    padding: 5,
    backgroundColor: "#eee",
    borderColor: "#aaa",
    borderWidth: 1,
  },
});
