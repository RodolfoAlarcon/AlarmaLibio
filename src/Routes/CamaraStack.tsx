import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CamaraScreen } from "../Views/System/camara/CamaraScreen";
import { Camaras } from "../Views/System/Camaras";

const CamaraStackScreen = () => {

    const CamaraStack = createNativeStackNavigator();

    return(
        <CamaraStack.Navigator 
            screenOptions={{headerShown: false}}
        >
            <CamaraStack.Screen name="Camaras" component={Camaras} />
            <CamaraStack.Screen name="CamaraScreen" component={CamaraScreen} />
        </CamaraStack.Navigator>
    )
}

export default CamaraStackScreen