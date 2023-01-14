
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { HomeStack } from './src/Routes/HomeStack';
import { UserProvider } from "./src/context/UsuarioContext";
import { NavigationContainer } from '@react-navigation/native';


export const AppState = ({ children }: { children: JSX.Element | JSX.Element[] }) => {

  return (
    <UserProvider>
      {children}
    </UserProvider>

  )
}

const App = () => {

  return (
    <NavigationContainer>
      <AppState>
        <HomeStack />
      </AppState>
    </NavigationContainer>

  );
};


export default App;
