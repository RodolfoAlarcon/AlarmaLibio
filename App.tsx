
import React, {useEffect} from 'react';
import OneSignal from 'react-native-onesignal';

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
  useEffect(()=>{
    OneSignal.setLogLevel(6, 0);
 
    OneSignal.setAppId("2b79ca5b-7087-42ce-885f-0bd54f480d13");
    OneSignal.setLanguage('es')

    OneSignal.promptForPushNotificationsWithUserResponse(response => {
      console.log("Prompt response:", response);
    });
  },[])
  return (
    <NavigationContainer>
      <AppState>
        <HomeStack />
      </AppState>
    </NavigationContainer>

  );
};


export default App;
