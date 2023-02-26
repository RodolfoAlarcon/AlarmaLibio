import React, { useContext, useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    TouchableOpacity,
    Modal,
    Image,
    TextInput,
    BackHandler
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { HeaderSelecion } from '../../../Components/HeaderSelecion';
import { BottomStopAlarma } from '../../../Components/BottomStopAlarma';
import { CounterBack } from '../../../Components/CounterBack';
import { ModalAlarma } from '../../../Components/ModalAlarma';
import { AuthContex } from '../../../context/UsuarioContext'
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export const AlarmaSelecionada = () => {

    const { user, grupos, sendAlarmaDescription } = useContext(AuthContex)
    const navigation = useNavigation();

    const route = useRoute();
    const { alerta } = route.params;
    const ws = new WebSocket(`wss://nodemcumicropython.herokuapp.com/ws/socket-server/`);
    //const [ws, onWs] = useState(new WebSocket(`wss://nodemcumicropython.herokuapp.com/ws/${grupos[0].grupo_id}/`));
    const [breke, setBreke] = useState(false)
    const [onAlarm, setOnAlarm] = useState(false)

    useEffect(() => {
        ws.onmessage = (e) => {
            let dat = JSON.parse(e.data);
            console.log(dat)
        }
    }, [])

    useEffect(() => {
        if (onAlarm == true) {
            ws.onopen = async function () {
                await ws.send(JSON.stringify({
                    'message': `cmd 4`,
                    'cmd_option': 4,
                    'type': 'message',
                    'name': "Nombre",
                    'id_key': "KEY PC ! "
                }))
            }
        }
    }, [onAlarm])

    BackHandler.addEventListener('hardwareBackPress', function () {
        closeWS()
    });
    const isFocused = useIsFocused();

    if (!isFocused) {
        closeWS()
    }

    async function closeWS() {
        await ws.close();
    }

    async function stopAlm() {
       
            await ws.send(JSON.stringify({
                'message': `cmd 0`,
                'cmd_option': 0,
                'type': 'message',
                'name': "Nombre",
                'id_key': "KEY PC ! "
            }))
       
       
    }

    return (
        <SafeAreaView>
            <HeaderSelecion
                titulo={alerta}
                icono={alerta}
            />
            <View style={styles.container}>


                <CounterBack styleT={styles.tiempo} styleTs={styles.tiempoSmall} breke={breke} setBreke={setBreke} stopAlm={stopAlm} />


                <TouchableOpacity onPress={() => {stopAlm()}}>
                    <BottomStopAlarma />
                </TouchableOpacity>
                <ModalAlarma alerta={alerta} setOnAlarm={setOnAlarm}/>

            </View>

        </SafeAreaView>
    )
    function goToBackScreen() {
        navigation.goBack()
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: Dimensions.get('window').height - 149,
    },
    tiempo: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#222A58",
        textAlign: "center"
    },
    tiempoSmall: {
        color: "#222A58",
        textAlign: "center",
        fontWeight: "500"
    },
    bottom: {
        backgroundColor: "#E30613",
        padding: 20,
        borderRadius: 20
    },
    textbottom: {
        color: "#ffffff",
        textAlign: "center"
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalHijo: {
        width: "90%",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        overflow: "hidden"
    },
    headerModal: {
        width: "100%",
        height: 70,
        backgroundColor: "#E4003A",
        padding: 12.5,
        paddingHorizontal: "3%",
        flexDirection: "row"
    },
    icono: {
        width: 45,
        height: 45
    },
    subcontainer: {
        flex: 1,
        paddingHorizontal: 7,
        justifyContent: "center"
    },
    nombreModal: {
        fontWeight: "bold",
        color: "#ffffff"
    },
    contenidoModal: {
        maxHeight: 200,
        padding: 5
    },
    textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: '#F5FCFF',
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#333',
    },
    subHeaderModal: {
        backgroundColor: "#606060",
        padding: 10
    },
    textSubHeaderModal: {
        color: "#ffffff"
    },
    input: {
        minHeight: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: "#E30613",
        justifyContent: "flex-start"
    },
    footerModal: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

    },
    botonModal: {
        backgroundColor: "#E30613",
        padding: 10,
        borderRadius: 5,
        width: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    textBotonmodal: {
        color: "#ffffff"
    }
});