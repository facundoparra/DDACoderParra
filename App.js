import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainNavigator from './navigation';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}
