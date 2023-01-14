import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BackHandler } from "react-native";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    Dimensions,
    ImageBackground

} from 'react-native';
import { Header } from '../../Components/Header';
import { ListaHistorial } from '../../Components/ListaHistorial';
import Video from 'react-native-video'
import ImageStream from '../../Components/ImageStream';

export const Historial = () => {


    return (

        <SafeAreaView>
            <Header
                titulo="HISTORIAL"
                descripcion="EN ESTA LISTA ENCUENTRAN TODAS LAS PERSONAS QUE ESTÁN CONECTADOS CON LA ALARMA."
                icono="historial"
            />
           
            <View style={{ width: 400, height: 400, backgroundColor: 'black' }}>
                
                <ImageStream />
            </View>
            

            <ScrollView style={styles.container}>
                <ListaHistorial />
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('window').height - 349,
        paddingTop: 15
    },

});
