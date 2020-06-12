import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { TodoInput } from "./components/TodoInput";
import { TodoListItem } from "./components/TodoListItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleButtonPress = todo => () => {
    setTodoList(prevStateTodoList => [
      ...prevStateTodoList,
      { key: Math.random().toString(), value: todo },
    ]);
    setIsModalActive(false);
  };

  const handleDeleteItem = itemId => () => {
    setTodoList(prevStateTodoList =>
      prevStateTodoList.filter(todo => todo.key !== itemId)
    );
  };

  const handleShowModal = () => {
    setIsModalActive(prevStateIsModalActive => !prevStateIsModalActive);
  };

  return (
    <View style={styles.root}>
      <Button title="add a todo" onPress={handleShowModal} />
      <TodoInput
        isModalActive={isModalActive}
        handleButtonPress={handleButtonPress}
        handleShowModal={handleShowModal}
      />
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
