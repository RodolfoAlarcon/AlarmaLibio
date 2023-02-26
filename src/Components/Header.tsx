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

export const Header = (props:any) =>{ 

const titulo = props.titulo
const icono = props.icono
const descripcion = props.descripcion

const handleIcono = () =>{
    if(icono == "alarma"){
        return(
            <Image 
                source={require("../Assets/Img/alarma.png")}
                style={styles.icono}
            />
        )
    }else if(icono == "configuracion"){
        return(
            <Image 
                source={require("../Assets/Img/configuracion.png")}
                style={styles.icono}
            />
        )
    }else if(icono == "historial"){
        return(
            <Image 
                source={require("../Assets/Img/historial.png")}
                style={styles.icono}
            />
        )
    }
    else if(icono == "vecinos"){
        return(
            <Image 
                source={require("../Assets/Img/vecinos.png")}
                style={styles.icono}
            />
        )
    }else if(icono == "CAMARA"){
        return(
            <Image 
                source={require("../Assets/Img/camaraAmarillo.png")}
                style={styles.icono}
            />
        )
    }else if(icono == "DENUNCIA"){
        return(
            <Image 
                source={require("../Assets/Img/vecinosHover.png")}
                style={styles.icono}
            />
        )
    }

}



    return(
        <View style={styles.container}>
            <ImageBackground
                source={require("./../Assets/Img/header.png")}
                resizeMode="stretch"
                style={styles.ImgHeader}
            >
                <Text style={styles.titulo}>
                    {titulo}
                </Text>
                {
                    handleIcono()
                }
                <View style={{width:"100%"}}>
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
        height:300,
        width:"100%",
    },
    ImgHeader:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:30,
        paddingBottom:50
    },
    titulo:{
        fontSize:40,
        color:"#FFFF00",
        fontWeight:"bold"
    },
    descripcion:{
        color:"#FFFFFF",
        paddingHorizontal:"15%",
        textAlign:"center"
    },
    icono:{
        width:100,
        height:100
    }
});