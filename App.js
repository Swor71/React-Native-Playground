import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { TodoInput } from "./components/TodoInput";
import { TodoListItem } from "./components/TodoListItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const handleButtonPress = todo => () => {
    setTodoList(prevStateTodoList => [
      ...prevStateTodoList,
      { key: Math.random().toString(), value: todo },
    ]);
  };

  const handleDeleteItem = itemId => () => {
    setTodoList(prevStateTodoList =>
      prevStateTodoList.filter(todo => todo.key !== itemId)
    );
  };

  return (
    <View style={styles.root}>
      <TodoInput handleButtonPress={handleButtonPress} />
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <TodoListItem onDeleteItem={handleDeleteItem} item={item} />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
});
