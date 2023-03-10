import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import { Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { Configuracion } from "../Views/System/Configuracion/Configuracion";
import  GruposStackScreen  from "../Routes/GruposStack";
import AlarmaStackScreen from "../Routes/AlarmaStack"
import ConfiguracionStackScreen from "../Routes/ConfiguracionStack"
import CamaraStackScreen from "../Routes/CamaraStack"
import HistorialStack from "../Routes/HistorialStack"

const Tab = createBottomTabNavigator();

export const ButtomTab = () => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: '#606060',
                    paddingBottom: 5
                },
                tabBarActiveTintColor: "#FFFF00",
                tabBarInactiveTintColor: "white",
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    var icon

                    switch (route.name) {
                        case 'ALARMA':
                            icon = focused ? <Image source={require("../Assets/Img/alarma.png")} style={{ width: 25, height: 25 }} /> : <Image source={require("../Assets/Img/alarmaHover.png")} style={{ width: 25, height: 25 }} />;
                            break;
                        case 'GRUPOS':
                            icon = focused ? <Image source={require("../Assets/Img/vecinos.png")} style={{ width: 25, height: 25 }} /> : <Image source={require("../Assets/Img/vecinosHover.png")} style={{ width: 25, height: 25 }} />;
                            break;
                        case 'CAMARAS':
                            icon = focused ? <Image source={require("../Assets/Img/camaraAmarillo.png")} style={{ width: 25, height: 25 }} /> : <Image source={require("../Assets/Img/camaraHover.png")} style={{ width: 25, height: 25 }} />;
                            break;
                        case 'HISTORIAL':
                            icon = focused ? <Image source={require("../Assets/Img/historial.png")} style={{ width: 25, height: 25 }} /> : <Image source={require("../Assets/Img/historialHover.png")} style={{ width: 25, height: 25 }} />;
                            break;
                        case 'CONFIGURACION':
                            icon = focused ? <Image source={require("../Assets/Img/configuracion.png")} style={{ width: 25, height: 25 }} /> : <Image source={require("../Assets/Img/configuracionHover.png")} style={{ width: 25, height: 25 }} />;
                            break;
                    }

                    return icon
                }
            })}
        >
            <Tab.Screen
                name="ALARMA"
                component={AlarmaStackScreen}
            />
            <Tab.Screen
                name="GRUPOS"
                component={GruposStackScreen}
            />
            <Tab.Screen
                name="CAMARAS"
                component={CamaraStackScreen}
            />
            <Tab.Screen
                name="HISTORIAL"
                component={HistorialStack}
            />
            <Tab.Screen
                name="CONFIGURACION"
                component={ConfiguracionStackScreen}
            />
        </Tab.Navigator>

    )

}