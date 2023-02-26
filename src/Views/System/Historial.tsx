import React, { useState, useRef, useEffect, useContext } from 'react';
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
import { AuthContex } from '../../context/UsuarioContext'
import apiApp from '../../api/api'
import { useIsFocused } from '@react-navigation/native';

export const Historial = (props: any) => {
    const { user } = useContext(AuthContex)
    const [historial, setHistorial] = useState([]);
    const [reload, setReload] = useState(false);
    const isFocused = useIsFocused();

    useEffect(() => {
      
        async function getFetech() {
            try {
                const resp = await apiApp.post('/getHistorialUser', {
                    id:user.id,
                    access_token: user.access_token
                })
               
                if (typeof resp.data.historial === 'object') {
                    setHistorial(resp.data.historial)
                } else {
                    setHistorial([])
                }
            } catch (error) {
                console.log(error)
            }
        }
        if(isFocused){
            getFetech()
            console.log('update')   
        }
       
    }, [isFocused])

    
    
    return (

        <SafeAreaView>
            <Header
                titulo="HISTORIAL"
                descripcion="EN ESTA LISTA ENCUENTRAN TODAS LAS PERSONAS QUE ESTÁN CONECTADOS CON LA ALARMA."
                icono="historial"
            />
            <ScrollView style={styles.container}>
                <ListaHistorial data={historial}/>
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
