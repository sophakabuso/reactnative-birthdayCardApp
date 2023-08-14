import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function GreetingInput({ value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Enter your greeting message"
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
