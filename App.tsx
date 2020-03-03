import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

import ScreenNavigator from './navigation/ScreenNavigator';

// - Allow the user to search and select a restaurant from 10 fictitious restaurants (use made-up, local data)
// - Select between cod & halibut fish and have the ability to add mushy peas to your order
// - Type in your delivery address, name, and any special delivery instructions
// - Does not need to do anything on "submit"

export default function App() {
  return (
    <ScreenNavigator />
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
