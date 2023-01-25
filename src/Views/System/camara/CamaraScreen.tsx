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
    Button,
    ImageBackground,
    TouchableOpacity

} from 'react-native';
import { Header } from '../../../Components/Header';
import { ListaHistorial } from '../../../Components/ListaHistorial';
import { NoFlickerImage } from 'react-native-no-flicker-image';

export const CamaraScreen = (props: any) => {

    const [image, setImage] = useState('');
    const [uri, setUri] = useState('');
    const { params } = props.route;

    const ws = new WebSocket(`wss://nodemcumicropython.herokuapp.com/${params.camara}/`)

    ws.onmessage = (e) => {
        let dat = JSON.parse(e.data);
        console.log(dat.message)
        if (dat.message.length > 200) {
            setUri({ uri: `data:image/jpeg;base64,${dat.message}` })
        }
    }
    return (
        <ScrollView>
            <SafeAreaView>
                <Header
                    titulo="Camara"
                    descripcion="EN ESTA LISTA ENCUENTRAN TODAS LAS PERSONAS QUE ESTÁN CONECTADOS CON LA ALARMA."

                />

                <View style={{ width: 400, height: 400, backgroundColor: 'black' }}>
                    <NoFlickerImage
                        style={{ width: 400, height: 400 }}
                        source={uri}
                    //ref={igmRef}
                    />


                </View>

                <TouchableOpacity
                    onPress={() => {
                        ws.send(JSON.stringify({
                            'cmd_option': 3
                        }))
                    }}
               
                >
                    <Text>Camara</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        ws.send(JSON.stringify({
                            'cmd_option': 0
                        }))
                    }}
                
                >
                    <Text>Detener</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('window').height - 349,
        paddingTop: 15
    },

});
