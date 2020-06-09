import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('first text.')

  const optionsArray = [
    'first text',
    'second text',
    'third text',
  ];

  const changeContents = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    setText(optionsArray[randomNumber])
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button title="Press me" onPress={() => changeContents()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
