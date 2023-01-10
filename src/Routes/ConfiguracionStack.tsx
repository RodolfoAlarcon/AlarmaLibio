import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Configuracion } from "../Views/System/Configuracion/Configuracion";
import { EditarPerfil } from "../Views/System/Configuracion/EditarPerfil";
import { CambiarPassword } from "../Views/System/Configuracion/CambiarPassword";
import { Notificacion } from '../Views/System/Configuracion/Notificacion';
import { Ayuda } from "../Views/System/Configuracion/Ayuda";

const ConfiguracionStackScreen = () => {

    const ConfiguracionStack = createNativeStackNavigator();

    return(
        <ConfiguracionStack.Navigator 
            screenOptions={{headerShown: false}}
        >
            <ConfiguracionStack.Screen name="Configuracion" component={Configuracion} />
            <ConfiguracionStack.Screen name="EditarPerfil" component={EditarPerfil} />
            <ConfiguracionStack.Screen name="CambiarPassword" component={CambiarPassword} />
            <ConfiguracionStack.Screen name="Notificacion" component={Notificacion} />
            <ConfiguracionStack.Screen name="Ayuda" component={Ayuda} />
        </ConfiguracionStack.Navigator>

    )
}

export default ConfiguracionStackScreen