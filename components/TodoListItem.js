import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const TodoListItem = (props) => {
  return (
    <View style={styles.todoItem}>
      <Text>{props.item.value}</Text>
    </View>
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
