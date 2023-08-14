import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function ClearButton({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Clear</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1f1f1f', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 1,
  },
  buttonText: {
    color: 'silver', 
    fontSize: 16,
    fontWeight: 'bold', 
  },
});
