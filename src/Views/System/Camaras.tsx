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
import { ListaCamaras } from '../../Components/ListaCamaras';


export const Camaras = () => {

    return(
        <SafeAreaView>
            <Header 
                titulo="CAMARA DE VIGILANCIA"
                icono="CAMARA"
                descripcion="ACTIVE EL BOTÓN ACORDE A SU EMERGENCIA
                Y ESCRIBA UN COMENTARIO A SUS VECINOS 
                PARA EVITAR FALSAS ALARMAS."
            />
            <ScrollView style={styles.container}>
                <ListaCamaras />
            </ScrollView>
        </SafeAreaView>
    )


}




const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('window').height - 349,
        paddingTop:15
    },
});