import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
} from 'react-native';
import { Header } from '../../../Components/Header';
import { ListaConfiguracion } from '../../../Components/ListaConfigracion';


export const Configuracion = () => {


    return (
        <SafeAreaView>
            <Header 
                titulo="CONFIGURACIÓN"
                icono="configuracion"
                descripcion="EN ESTA LISTA SE ENCUENTRAN TODAS LAS PERSONAS QUE ESTÁN CONECTADAS CON LA ALARMA."
                retroceder={true}
            />
            <ScrollView>
                <ListaConfiguracion />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('window').height - 349,
    },
});

