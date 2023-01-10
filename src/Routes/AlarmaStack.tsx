import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Alarmas } from "../Views/System/alarma/Alarmas";
import { AlarmaSelecionada } from "../Views/System/alarma/AlarmaSelecionada";

const AlarmaStackScreen = () => {

    const AlarmaStack = createNativeStackNavigator();

    return(
        <AlarmaStack.Navigator 
            screenOptions={{headerShown: false}}
        >
            <AlarmaStack.Screen name="Alarmas" component={Alarmas} />
            <AlarmaStack.Screen name="AlarmaSelecionada" component={AlarmaSelecionada} />
        </AlarmaStack.Navigator>

    )
}

export default AlarmaStackScreen