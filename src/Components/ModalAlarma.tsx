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
import { AuthContex } from '../context/UsuarioContext'
import { useNavigation } from '@react-navigation/native';

export const ModalAlarma = (props: any) => {

    const { user, grupos, sendAlarmaDescription, sendUpdateDescription } = useContext(AuthContex)
    const [modal, setModal] = useState(false);
    const [text, onChangeText] = useState("");
    const [id, setId] = useState("")
    const [textarea, setTextarea] = useState("")
    const navigation = useNavigation();

    useEffect(() => {
        async function respAlarm() {
            let res = await sendAlarmaDescription(user.id, grupos[0].grupo_id, props.alerta, user.access_token, '');
            if (res.status == true) {
                setId(res.resp)
                props.setOnAlarm(true)
            } else {
                //await closeWS();
                goToBackScreen()
            }
        }
        respAlarm()
    }, [])

    const _renderImagenHover = () => {
        if (props.alerta == "PERSONAS SOSPECHOSAS") {
            return (
                <Image
                    source={require("../Assets/Img/sospechosoHover.png")}
                    style={styles.icono}
                />
            )
        } else if (props.alerta == "ALERTA INCENDIO") {
            return (
                <Image
                    source={require("../Assets/Img/incendioHover.png")}
                    style={styles.icono}
                />
            )
        } else if (props.alerta == "ROBO O ASALTO") {
            return (
                <Image
                    source={require("../Assets/Img/roboHover.png")}
                    style={styles.icono}
                />
            )
        } else if (props.alerta == "ALERTA MÉDICA") {
            return (
                <Image
                    source={require("../Assets/Img/medicaHover.png")}
                    style={styles.icono}
                />
            )
        }
    }

    return (
        <View>

            <TouchableOpacity style={styles.bottom} onPress={() => { setModal(!modal) }}>
                <Text style={styles.textbottom}>
                    EXPLIQUE LA RAZÓN POR HABER
                    </Text>
                <Text style={styles.textbottom}>
                    ACTIVADO AL ALARMA.
                    </Text>
            </TouchableOpacity>
            {
                modal == true ?
                    <Modal
                        animationType="slide"
                        transparent
                        visible={true}
                    >
                        <View style={styles.modal}>
                            <View style={styles.modalHijo}>
                                <View style={styles.headerModal}>
                                    {
                                        _renderImagenHover()
                                    }
                                    <View style={styles.subcontainer}>
                                        <Text style={styles.nombreModal}>
                                            {props.alerta}
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: "center", alignItems: "flex-end" }}>
                                        <Text style={styles.nombreModal}>
                                            10:00PM
                                        </Text>
                                        <Text style={styles.nombreModal}>
                                            June 12, 2023
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.subHeaderModal}>
                                    <Text numberOfLines={1} style={styles.textSubHeaderModal}>LA RAZÓN PORQUE ACTIVE LA ALARMA ES LA SIGUIENTE:</Text>
                                </View>
                                <View style={styles.contenidoModal}>
                                    <ScrollView>
                                        <TextInput
                                            multiline={true}
                                            numberOfLines={5}
                                            onChangeText={onChangeText}
                                            value={text}
                                            style={styles.input}
                                        />
                                    </ScrollView>
                                </View>
                                <View style={styles.footerModal}>
                                    <TouchableOpacity style={styles.botonModal} onPressOut={() => { setModal(false), onChangeText("") }}>
                                        <Text style={styles.textBotonmodal} >
                                            CANCELAR
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.botonModal} onPressOut={async () => {
                                        let resp =  await sendUpdateDescription(user.id, user.access_token, id,text);
                                        if (resp.status == true){
                                            onChangeText("");
                                            setModal(false);
                                        }
                                        
                                    }}>
                                        <Text style={styles.textBotonmodal}>
                                            ENVIAR
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    :
                    <></>
            }
        </View>
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