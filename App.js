import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { TodoInput } from "./components/TodoInput";
import { TodoListItem } from "./components/TodoListItem";

export default function App() {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleTextChange = (value) => setTodo(value);

  const handleButtonPress = () =>
    setTodoList((prevState) => [
      ...prevState,
      { key: Math.random().toString(), value: todo },
    ]);

  return (
    <View style={styles.root}>
      <TodoInput
        todo={todo}
        handleTextChange={handleTextChange}
        handleButtonPress={handleButtonPress}
      />
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
