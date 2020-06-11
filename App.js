import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput placeholder="Enter your name" style={styles.input} />
        <Button title="press" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
