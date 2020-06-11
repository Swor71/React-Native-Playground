import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add a todo item" style={styles.input} />
        <Button title="press" />
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
