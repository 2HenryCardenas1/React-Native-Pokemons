import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTab from './src/navigation/NavigationTab'; "./src/navigation/NavigationTab.jsx";
import { AuthProvider } from "./src/context/AuthContext"
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <NavigationTab />
      </AuthProvider>
    </NavigationContainer>
  );
}

