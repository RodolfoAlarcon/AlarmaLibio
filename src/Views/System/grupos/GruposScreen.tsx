import React, { useState, useContext, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions
} from 'react-native';
import { Header } from '../../../Components/Header';
import { ListaGrupos } from '../../../Components/ListaGrupos';
import { AuthContex } from '../../../context/UsuarioContext'
import apiApp from '../../../api/api'

export const GruposScreen = () => {
    const { user, grupos } = useContext(AuthContex)
    
    return (
        <SafeAreaView>
            <Header
                titulo="GRUPOS"
                icono="vecinos"
                descripcion="ACTIVE EL BOTÓN ACORDE A SU EMERGENCIA
                Y ESCRIBA UN COMENTARIO A SUS VECINOS 
                PARA EVITAR FALSAS ALARMAS."
            />
            <ScrollView style={styles.container}>
                <ListaGrupos data={grupos} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('window').height - 349,
        paddingTop:15
    },
});

