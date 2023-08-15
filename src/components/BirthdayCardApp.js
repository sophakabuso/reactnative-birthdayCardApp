// BirthdayCardApp.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GreetingCard from './GreetingCard';
import GreetingInput from './GreetingInput';
import ClearButton from './ClearButton';

export default function BirthdayCardApp() {
  const [greeting, setGreeting] = useState('');

  // Handler for changing the greeting message
  const handleGreetingChange = (text) => {
    setGreeting(text);
  };

  // Handler for clearing the greeting message
  const handleClearPress = () => {
    setGreeting('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Digital Birthday Card</Text>
      <GreetingCard greeting={greeting} />
      <GreetingInput
        value={greeting}
        onChangeText={handleGreetingChange}
      />
      <ClearButton onPress={handleClearPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(31, 31, 31, 0.9)', 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', 
  },
});
