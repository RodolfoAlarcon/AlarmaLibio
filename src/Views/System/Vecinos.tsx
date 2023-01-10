import React from 'react';
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
import { Header } from '../../Components/Header';
import { ListaVecions } from '../../Components/ListaVecinos';


export const Vecinos = () => {


    return (
        <SafeAreaView>
            <Header
                titulo="VECINOS"
                icono="vecinos"
                descripcion="ACTIVE EL BOTÓN ACORDE A SU EMERGENCIA
                Y ESCRIBA UN COMENTARIO A SUS VECINOS 
                PARA EVITAR FALSAS ALARMAS."
            />
            <ScrollView style={styles.container}>
                <ListaVecions />
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

