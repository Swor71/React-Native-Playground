import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { TodoInput } from "./components/TodoInput";
import { TodoListItem } from "./components/TodoListItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const handleButtonPress = todo => () =>
    setTodoList(prevState => [
      ...prevState,
      { key: Math.random().toString(), value: todo },
    ]);

  return (
    <View style={styles.root}>
      <TodoInput handleButtonPress={handleButtonPress} />
      <FlatList
        data={todoList}
        renderItem={({ item }) => <TodoListItem item={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
});
