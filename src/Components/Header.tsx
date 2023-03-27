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
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome"
import { useNavigation } from '@react-navigation/native';



export const Header = (props: any) => {

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
                {
                    retroceder == true ?
                        <View style={{width:"100%", justifyContent:"space-around", alignItems:"center", flexDirection:"row"}}>
                            <TouchableOpacity style={styles.retroceder}
                                onPress={ () => navigation.goBack() }
                            >
                                <Icon name="arrow-left" size={20} color="#fff" />
                            </TouchableOpacity>
                            <View>
                            <Text style={styles.titulo}>
                                {titulo}
                            </Text>
                            </View>
                            <View></View>
                        </View>
                        :
                        <Text style={styles.titulo}>
                            {titulo}
                        </Text>
                }
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
        height: 300,
        width: "100%",
    },
    ImgHeader: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 60,
        position: "relative"
    },
    titulo: {
        fontSize: 35,
        color: "#FFFF00",
        fontWeight: "bold"
    },
    descripcion: {
        color: "#FFFFFF",
        paddingHorizontal: "15%",
        textAlign: "center"
    },
    icono: {
        width: 80,
        height: 80
    },
    retroceder: {

    }
});