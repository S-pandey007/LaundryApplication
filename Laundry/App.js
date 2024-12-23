import React from 'react';
import { StyleSheet } from 'react-native'; // Removed SafeAreaView
import StackNavigation from './StackNavigation';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <><StackNavigation /><StatusBar style='auto' /></>
)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
