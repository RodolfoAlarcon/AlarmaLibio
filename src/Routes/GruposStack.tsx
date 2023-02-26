import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { CamaraScreen } from "../Views/System/camara/CamaraScreen";
import { VecinosScreen } from "../Views/System/grupos/VecinosScreen";
import { GruposScreen } from "../Views/System/grupos/GruposScreen";
import { DenunciasScreen } from "../Views/System/DenunciasScreen";

const GruposStackScreen = () => {

    const GruposStack = createNativeStackNavigator();

    return(
        <GruposStack.Navigator 
            screenOptions={{headerShown: false}}
        >
            <GruposStack.Screen name="GruposScreen" component={GruposScreen} />
            <GruposStack.Screen name="VecinosScreen" component={VecinosScreen} />
            <GruposStack.Screen name="DenunciasScreen" component={DenunciasScreen} />
        </GruposStack.Navigator>
    )
}

export default GruposStackScreen