import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native"
import { ButtomTab } from "../Navigation/BottomTab"
import React, { useState } from 'react';
import { Login } from "../Views/Login";
import { EnviarCorreo } from "../Views/EnviarCorreo";
import { CodigoVerificacion } from '../Views/CodigoVerificacion';
import { ResetPassword } from "../Views/ResetPassword";

const Stack = createNativeStackNavigator();

export function HomeStack() {

    const [user, SetUser] = useState("admin")

    return (
        <NavigationContainer independent={true}>
            {/*<Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="EnviarCorreo"
                    component={EnviarCorreo}
                />
                <Stack.Screen
                    name="CodigoVerificacion"
                    component={CodigoVerificacion}
                />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                />
            </Stack.Navigator>*/}


            <ButtomTab />
        </NavigationContainer>
    )
}