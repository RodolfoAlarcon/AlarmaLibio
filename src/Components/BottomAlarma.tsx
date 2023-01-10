import React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const BottomAlarma = (props: any) => {

    const navigation = useNavigation();
    const titulo = props.titulo
    const icono = props.icono

    const handleIcono = () => {
        if (icono == "sospechoso") {
            return (
                <Image
                    source={require("../Assets/Img/sospechoso.png")}
                    style={styles.icono}
                />
            )
        } else if (icono == "robo") {
            return (
                <Image
                    source={require("../Assets/Img/robo.png")}
                    style={styles.icono}
                />
            )
        } else if (icono == "medica") {
            return (
                <Image
                    source={require("../Assets/Img/medica.png")}
                    style={styles.icono}
                />
            )
        }
        else if (icono == "incendio") {
            return (
                <Image
                    source={require("../Assets/Img/incendio.png")}
                    style={styles.icono}
                />
            )
        }
    }

    return (
        <TouchableOpacity
            style={styles.boton}
            onPress={() => navigation.navigate('AlarmaSelecionada', {
                alerta: titulo
            })}
        >
            {
                handleIcono()
            }
            <Text style={styles.texto}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    boton: {
        width: "90%",
        marginHorizontal: "5%",
        paddingHorizontal: 8,
        paddingVertical: 20,
        backgroundColor: "white",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    texto: {
        color: "#E30613",
        fontWeight: "900",
        textAlign: "center",
        fontSize: 20
    },
    icono: {
        width: 65,
        height: 65,
        marginBottom: 15
    }
});