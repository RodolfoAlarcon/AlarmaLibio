import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"
import { ButtomTab } from "../Navigation/BottomTab"
import React, { useContext, useEffect } from 'react';
import { getUsuario } from '../storage/UsuarioAsyncStorage'
import { getGrupos } from '../storage/GruposAsyncStorage'
import { LoginScreen } from "../Views/LoginScreen";
import { EnviarCorreo } from "../Views/EnviarCorreo";
import { CodigoVerificacion } from '../Views/CodigoVerificacion';
import { ResetPassword } from "../Views/ResetPassword";
import { AuthContex } from '../context/UsuarioContext'


export function HomeStack() {
    const Stack = createNativeStackNavigator();
    const { sing, status } = useContext(AuthContex)
    
    useEffect(() => {
        fetchSession(status)
        
    }, [])
    
    async function fetchSession(statusl: any) {
        let responseUser = await getUsuario();
        let responseGrupos = await getGrupos();
    
        if (responseUser !== null) {
            statusl = 'authenticated';
        }
        sing(responseUser, responseGrupos, statusl)
      
    }
    

    if (status === 'authenticated') {
        return (

            <ButtomTab />
        )

    } else {
        return (

            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
        )

    }
}