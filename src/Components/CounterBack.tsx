import React, { useContext, useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    TouchableOpacity,
    Modal,
    Image,
    TextInput,
    BackHandler
} from 'react-native';

export const CounterBack = (props:any) => {

    const [contador, setContador] = useState(5)
    
    useEffect(() => {
        if (props.breke == false) {
            setTimeout(async function () {
                if (contador == 0) {
                   await props.setBreke(true)
                   await props.stopAlm()
                } else {
                    setContador(contador - 1)
                }
            }, 1000);
        } else {
            console.log("se detuvo")
        }
    }, [contador])

    return (
        <View>
            <Text style={props.styleT}>{contador} SEGUNDOS</Text>
            <Text style={props.styleTs}>PRESIONE LA PLANTALLA SI DESEA PARAR LA ALARMA.</Text>
        </View>
    )

}