import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/redux/stores/main';
import Nav from './src/navigations';

export default function App() {
  return (
    <Provider store={store}>
      <Nav />
      <StatusBar style="auto" />
    </Provider>
  );
}
