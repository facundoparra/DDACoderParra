import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainNavigator from './navigation';

export default function App() {
  return (
    <>
      <MainNavigator />
      <StatusBar style="auto" />
    </>
  );
}
