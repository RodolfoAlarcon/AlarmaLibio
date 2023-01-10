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
import { BottomAlarma } from '../../../Components/BottomAlarma';
import { Header } from '../../../Components/Header';
import { ButtomTab } from "../../../Navigation/BottomTab"



export const Alarmas = () => {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                titulo="ALARMA"
                icono="alarma"
                descripcion="ACTIVE EL BOTÓN ACORDE A SU EMERGENCIA Y ESCRIBA UN COMENTARIO A SUS VECINOS PARA EVITAR FALSAS ALARMAS."
            />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.hijocontainer}>
                        <View style={styles.bottom}>
                            <BottomAlarma 
                                icono="sospechoso"
                                titulo="PERSONA SOSPECHOSAS"
                            />
                        </View>
                        <View style={styles.bottom}>
                            <BottomAlarma 
                                icono="robo"
                                titulo="ROBO O ASALTO"
                            />
                        </View>
                    </View>
                    <View style={styles.hijocontainer}>
                        <View style={styles.bottom}>
                            <BottomAlarma 
                                icono="medica"
                                titulo="ALERTA MÉDICA"
                            />
                        </View>
                        <View style={styles.bottom}>
                            <BottomAlarma 
                                icono="incendio"
                                titulo="ALERTA INCENDIO"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('window').height - 349,
    },
    hijocontainer: {
        width: "100%",
        height: "50%",
        flexDirection:"row"
    },
    bottom:{
        width:"50%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        padding:"3.5%"
    }
});