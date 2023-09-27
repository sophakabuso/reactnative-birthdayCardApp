// GreetingInput.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function GreetingInput({ value, onChangeText }) {
  return (
    // Input field for entering the greeting message
    <TextInput
      style={styles.input}
      placeholder="Enter your greeting message"
      placeholderTextColor="#888" 
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    borderColor: 'purple', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: '#333', 
  },
});
