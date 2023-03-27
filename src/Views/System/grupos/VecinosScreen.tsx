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
import { ListaVecions } from '../../../Components/ListaVecinos';
import { AuthContex } from '../../../context/UsuarioContext'
import apiApp from '../../../api/api'

export const VecinosScreen = (props:any) => {
    const { user } = useContext(AuthContex)
    const { params } = props.route;
    const [vecinos, setVecinos] = useState<any>([])

    useEffect(() => {
        async function getFetech() {
            try {
                const resp = await apiApp.post('/getGroups', {
                    grupo_id: params.grupo.grupo_id,
                    id:user.id,
                    access_token: user.access_token
                })
               
                if (typeof resp.data.usuarios === 'object') {
                    setVecinos(resp.data.usuarios)
                } else {
                    setVecinos([])
                }
            } catch (error) {
                console.log(error)
            }
        }
        getFetech()

    }, [])
    return (
        <SafeAreaView>
            <Header
                titulo="VECINOS"
                icono="vecinos"
                descripcion="ACTIVE EL BOTÓN ACORDE A SU EMERGENCIA
                Y ESCRIBA UN COMENTARIO A SUS VECINOS 
                PARA EVITAR FALSAS ALARMAS."
                retroceder={true}
            />
            <ScrollView style={styles.container}>
                <ListaVecions data={vecinos} />
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

