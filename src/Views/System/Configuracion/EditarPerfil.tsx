import React from "react";
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
import { Header } from '../../../Components/Header';
import { Input } from "../../../Components/Input";


export const EditarPerfil = () => {

    return (
        <SafeAreaView>
            <Header
                titulo="CONFIGURACIÓN"
                icono="configuracion"
                descripcion="EN ESTA LISTA SE ENCUENTRAN TODAS LAS PERSONAS QUE ESTÁN CONECTADAS CON LA ALARMA."
            />
            <ScrollView style={styles.container}>
                <Text style={styles.texto}>
                    Nombre:
                </Text>
                <Input
                    placeholder="Rodolfo"
                    keyboardType="default"
                />
                <Text style={styles.texto}>
                    Apellido:
                </Text>
                <Input
                    placeholder="Alarcon"
                    keyboardType="default"
                />
                <Text style={styles.texto}>
                    Teléfono:
                </Text>
                <Input
                    placeholder="989014809"
                    keyboardType="numeric"
                />
                <Text style={styles.texto}>
                    Provincia:
                </Text>
                <Input
                    placeholder="Distrito Federal"
                    keyboardType="default"
                />
                <Text style={styles.texto}>
                    Ciudad:
                </Text>
                <Input
                    placeholder="Caracas"
                    keyboardType="default"
                />
                <TouchableOpacity style={styles.Boton}>
                    <Text style={styles.textoboton}>
                        ENVIAR
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('window').height - 349,
        paddingTop: 10, 
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