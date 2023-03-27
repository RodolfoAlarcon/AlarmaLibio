import React, { useState, useRef, useEffect, useCallback } from 'react';
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
    TouchableOpacity,
    BackHandler

} from 'react-native';
import { Header } from '../../../Components/Header';
import { ListaHistorial } from '../../../Components/ListaHistorial';
import { NoFlickerImage } from 'react-native-no-flicker-image';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';

export const CamaraScreen = (props: any) => {

    const [image, setImage] = useState('');
    const [uri, setUri] = useState('');
    const { params } = props.route;

    const ws = new WebSocket(`wss://nodemcumicropython.herokuapp.com/${params.camara}/`)

    useEffect(() => {
        ws.onmessage = (e) => {
            let dat = JSON.parse(e.data);
            if (dat.message.length > 200) {
                setUri({ uri: `data:image/jpeg;base64,${dat.message}` })
            }
        }
    }, [])


    BackHandler.addEventListener('hardwareBackPress', function () {
        closeWS()
    });
    const isFocused = useIsFocused();
    if (!isFocused) {
        closeWS()
    }
    function closeWS() {
        ws.close();
    }
    console.log(isFocused)
    return (
        <ScrollView>
            <SafeAreaView>
                <Header
                    titulo="Camara"
                    descripcion="EN ESTA LISTA ENCUENTRAN TODAS LAS PERSONAS QUE ESTÁN CONECTADOS CON LA ALARMA."
                    retroceder={true}
                />

                <View style={{ width: 400, height: 400, backgroundColor: 'black' }}>
                    <NoFlickerImage
                        style={{ width: 400, height: 400 }}
                        source={uri}
                    //ref={igmRef}
                    />


                </View>

                {/*<TouchableOpacity
                    onPress={async () => {
                        await ws.send(JSON.stringify({
                            'message': `cmd 4`,
                            'cmd_option': 3,
                            'type': 'message',
                            'name': "Nombre",
                            'id_key': "KEY PC ! "
                        }))
                    }}

                >
                    <Text>Camara</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={async () => {
                        await ws.send(JSON.stringify({
                            'message': `cmd 4`,
                            'cmd_option': 0,
                            'type': 'message',
                            'name': "Nombre",
                            'id_key': "KEY PC ! "
                        }))
                    }}

                >
                    <Text>Detener</Text>
                </TouchableOpacity>*/}
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
