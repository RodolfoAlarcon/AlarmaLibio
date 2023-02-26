import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DenunciasScreen } from "../Views/System/DenunciasScreen";
import { Historial } from "../Views/System/Historial";

const HistorialStack = () => {

    const HistorialStack = createNativeStackNavigator();

    return(
        <HistorialStack.Navigator 
            screenOptions={{headerShown: false}}
        >
            <HistorialStack.Screen name="Historial" component={Historial} />
            <HistorialStack.Screen name="DenunciasScreen" component={DenunciasScreen} />
        </HistorialStack.Navigator>

    )
}

export default HistorialStack