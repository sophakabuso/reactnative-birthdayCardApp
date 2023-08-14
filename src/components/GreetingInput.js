import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function GreetingInput({ value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder="Enter your greeting message"
      placeholderTextColor="#888" // Modern placeholder text color
      value={value}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    borderColor: '#000', // Bold black border color
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: '#333', // Modern text color
  },
});
