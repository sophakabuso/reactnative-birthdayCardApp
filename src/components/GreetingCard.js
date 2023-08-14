import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GreetingCard({ greeting }) {
  return (
    <View style={styles.card}>
      <Text style={styles.greeting}>{greeting || 'Happy Birthday!'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '80%',
    height: 200,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    textAlign: 'center',
  },
});
