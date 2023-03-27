import React from "react";
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const HeaderDeep = (props: any) => {

    const titulo = props.titulo
    const icono = props.icono
    const descripcion = props.descripcion
    const retroceder = props.retroceder

    const navigation = useNavigation();

    const handleIcono = () => {
        if (icono == "alarma") {
            return (
                <Image
                    source={require("../Assets/Img/alarma.png")}
                    style={styles.icono}
                />
            )
        } else if (icono == "configuracion") {
            return (
                <Image
                    source={require("../Assets/Img/configuracion.png")}
                    style={styles.icono}
                />
            )
        } else if (icono == "historial") {
            return (
                <Image
                    source={require("../Assets/Img/historial.png")}
                    style={styles.icono}
                />
            )
        }
        else if (icono == "vecinos") {
            return (
                <Image
                    source={require("../Assets/Img/vecinos.png")}
                    style={styles.icono}
                />
            )
        } else if (icono == "CAMARA") {
            return (
                <Image
                    source={require("../Assets/Img/camaraAmarillo.png")}
                    style={styles.icono}
                />
            )
        } else if (icono == "DENUNCIA") {
            return (
                <Image
                    source={require("../Assets/Img/vecinosHover.png")}
                    style={styles.icono}
                />
            )
        }

    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("./../Assets/Img/header.png")}
                resizeMode="stretch"
                style={styles.ImgHeader}
            >
                
                    <View style={{ width: "100%", justifyContent: "space-around", alignItems: "center", flexDirection: "row" }}>
                        <TouchableOpacity style={styles.retroceder}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={require("../Assets/Img/back-white.png")}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.titulo}>
                                {titulo}
                            </Text>
                        </View>
                        <View></View>
                    </View>

                
                {
                    handleIcono()
                }
                <View style={{ width: "100%" }}>
                    <Text style={styles.descripcion}>
                        {descripcion}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: "100%",
    },
    ImgHeader: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 25,
        paddingBottom: 50,
        position: "relative"
    },
    titulo: {
        fontSize: 25,
        color: "#FFFF00",
        fontWeight: "bold",
        textAlign: 'center'
    },
    descripcion: {
        color: "#FFFFFF",
        paddingHorizontal: "15%",
        textAlign: "center"
    },
    icono: {
        width: 60,
        height: 60
    },
    retroceder: {

    }
});