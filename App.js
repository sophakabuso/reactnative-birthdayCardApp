// App.js
import React from 'react';
import { View } from 'react-native';
import BirthdayCardApp from './src/components/BirthdayCardApp';

export default function App() {
  return (
    // Main App component rendering BirthdayCardApp
    <View style={{ flex: 1 }}>
      <BirthdayCardApp />
    </View>
  );
}
