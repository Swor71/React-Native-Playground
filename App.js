import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [todo, setTodo] = useState('buy milk');
  const [todoList, setTodoList] = useState([])

  const handleTextChange = value => setTodo(value);

  const handleButtonPress = () => setTodoList(prevState => [...prevState, todo]);

  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add a todo item" style={styles.input} onChangeText={handleTextChange} value={todo} />
        <Button title="press" onPress={handleButtonPress} />
      </View>
      <View>
        {todoList.map(todo => <Text key={todo}>{todo}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
  input: {
    borderBottomColor: 'black', borderBottomWidth: 1, padding: 5, width: '70%'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
