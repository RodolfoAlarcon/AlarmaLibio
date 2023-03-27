import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { HeaderDeep } from '../../../Components/HeaderDeep';
import { Input } from "../../../Components/Input";
import CheckBox from "@react-native-community/checkbox"
import  YouTube  from 'react-native-youtube';


export const Ayuda = () => {


    return (
        <SafeAreaView>
            <HeaderDeep
                titulo="CONFIGURACIÓN"
                icono="configuracion"
                descripcion="EN ESTA LISTA SE ENCUENTRAN TODAS LAS PERSONAS QUE ESTÁN CONECTADAS CON LA ALARMA."
                retroceder={true}
            />
            <ScrollView style={styles.container}>

                <Text style={styles.texto}>
                    VIDEO EXPLICATIVO DEL USO CORRECTO DE LA APLICACIÓN
                </Text>
            </ScrollView>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('window').height - 349,
        paddingTop: 20,
        paddingHorizontal: "5%"
    },
    texto: {
        color: "#606060",
        marginTop: 10
    },
    Boton: {
        backgroundColor: "#E30613",
        borderRadius: 15,
        padding: 12,
        marginVertical: 10,
        marginBottom: 30
    },
    textoboton: {
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "bold"
    },
});