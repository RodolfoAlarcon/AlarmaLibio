import React from "react";
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export const HeaderSelecion = (props: any) => {

    const titulo = props.titulo
    const icono = props.icono

    const handleIcono = () => {
        if (icono == "PERSONA SOSPECHOSAS") {
            return (
                <Image
                    source={require("../Assets/Img/sospechosoAmarillo.png")}
                    style={styles.icono}
                />
            )
        } else if (icono == "ROBO O ASALTO") {
            return (
                <Image
                    source={require("../Assets/Img/roboAmarillo.png")}
                    style={styles.icono}
                />
            )
        } else if (icono == "ALERTA MÉDICA") {
            return (
                <Image
                    source={require("../Assets/Img/medicaAmarilla.png")}
                    style={styles.icono}
                />
            )
        }
        else if (icono == "ALERTA INCENDIO") {
            return (
                <Image
                    source={require("../Assets/Img/incendioAmarillo.png")}
                    style={styles.icono}
                />
            )
        }
    }

    return (
        <View style={styles.container}>
                {
                    handleIcono()
                }
                <Text style={styles.titulo}>
                    {titulo}
                </Text>
        </View>
    )


}
const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        backgroundColor: "#E4003A",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    titulo: {
        fontSize: 25,
        color: "#FFFF00",
        fontWeight: "bold",
        textAlign:"center",
        marginLeft:5,
    },
    icono: {
        width: 65,
        height: 65
    }
});