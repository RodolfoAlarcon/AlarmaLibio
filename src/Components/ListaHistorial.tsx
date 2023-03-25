import React, { useEffect, useState, useContext } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    FlatList,
    Modal
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContex } from '../context/UsuarioContext'

export const ListaHistorial = (props: any) => {

    const [modal, setModal] = useState(false);
    const [itemModal, setItemModal] = useState([])
    const navigation = useNavigation();
    const { user } = useContext(AuthContex)

    const lista = props.data.reverse()


    const _renderImagen = (item: any) => {
        if (item == "PERSONAS SOSPECHOSAS") {
            return (
                <Image
                    source={require("../Assets/Img/sospechoso.png")}
                    style={styles.icono}
                />
            )
        } else if (item == "ALERTA INCENDIO") {
            return (
                <Image
                    source={require("../Assets/Img/incendio.png")}
                    style={styles.icono}
                />
            )
        } else if (item == "ROBO O ASALTO") {
            return (
                <Image
                    source={require("../Assets/Img/robo.png")}
                    style={styles.icono}
                />
            )
        } else if (item == "ALERTA MEDICA") {
            return (
                <Image
                    source={require("../Assets/Img/medica.png")}
                    style={styles.icono}
                />
            )
        }
    }
    const _renderImagenHover = (item: any) => {
        if (item == "PERSONAS SOSPECHOSAS") {
            return (
                <Image
                    source={require("../Assets/Img/sospechosoHover.png")}
                    style={styles.icono}
                />
            )
        } else if (item == "ALERTA INCENDIO") {
            return (
                <Image
                    source={require("../Assets/Img/incendioHover.png")}
                    style={styles.icono}
                />
            )
        } else if (item == "ROBO O ASALTO") {
            return (
                <Image
                    source={require("../Assets/Img/roboHover.png")}
                    style={styles.icono}
                />
            )
        } else if (item == "ALERTA MEDICA") {
            return (
                <Image
                    source={require("../Assets/Img/medicaHover.png")}
                    style={styles.icono}
                />
            )
        }
    }
    const _handleModal = () => {

        return (
            <View style={styles.modalHijo}>
                <View style={styles.headerModal}>
                    <View>
                        {
                            _renderImagenHover(itemModal.alarm_type)
                        }
                    </View>
                    <View style={styles.subcontainer}>
                        <Text style={styles.nombreModal}>
                            {itemModal.name} {itemModal.apellido}
                        </Text>
                        <Text style={styles.razonModal} numberOfLines={1}>
                            {itemModal.alarm_type}
                        </Text>
                    </View>
                    <View style={{ justifyContent: "flex-end" }}>
                        <Text style={styles.fechaModal}>
                            {itemModal.alarm_date}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{ justifyContent: "center", paddingLeft: 10 }}
                        onPress={() => { setModal(false), setItemModal([]) }}
                    >
                        <Image
                            source={require("../Assets/Img/salir.png")}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.contenidoModal}>
                    <ScrollView>
                        <Text style={styles.descripcionModal}>
                            {itemModal.alarm_menssage}
                        </Text>
                        <View style={{ flexDirection: "row", marginTop: 10, alignItems: "flex-end" }}>
                            <Image
                                source={require("../Assets/Img/gps.png/")}
                                style={{ width: 20, height: 20, }}
                            />
                            <Text style={[styles.descripcionModal, { marginLeft: 5 }]} numberOfLines={1}>
                                { }
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10, alignItems: "flex-end" }}>
                            <Image
                                source={require("../Assets/Img/numero.png/")}
                                style={{ width: 20, height: 20, }}
                            />
                            <Text style={[styles.descripcionModal, { marginLeft: 5 }]} numberOfLines={1}>
                                {itemModal.phone}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.footerModal}>
                    {itemModal.users_id !== user.id ?
                        <TouchableOpacity onPress={() => { setModal(false), setItemModal([]), goToScreen('DenunciasScreen', itemModal.users_id) }}>
                            <View style={styles.botonModal}>
                                <Text style={styles.textBotonmodal}>
                                    DENUNCIAR
                        </Text>
                            </View>
                        </TouchableOpacity>
                        : <></>
                    }

                </View>
            </View>
        )

        function goToScreen(routeName: any, id: any) {
            navigation.navigate(routeName as never, { id: id } as never)
        }
    }

    const _renderItem = (item: any) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => { setModal(true), setItemModal(item) }}
                    style={styles.container}
                >
                    <View>
                        {
                            _renderImagen(item.alarm_type)
                        }
                    </View>
                    <View style={styles.subcontainer}>
                        <Text style={[styles.nombre, { color: "#606060" }]}>
                            {item.name} {item.apellido}
                        </Text>
                        <Text style={styles.descripcion} numberOfLines={1}>
                            {item.alarm_menssage}
                        </Text>
                    </View>
                    <View style={styles.cajafecha}>
                        <View style={styles.fecha}>
                            <Text style={styles.fechatexto}>
                                {item.alarm_date}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <FlatList
                numColumns={1}
                data={lista}
                renderItem={({ item }) => _renderItem(item)}
                keyExtractor={(item: any, index) => index.toString()}
                style={{ width: '100%' }}
            />
            {
                modal == true ?
                    <Modal
                        animationType="slide"
                        transparent
                        visible={true}
                    >
                        <View style={styles.modal}>
                            {
                                _handleModal()
                            }
                        </View>
                    </Modal>
                    :
                    <></>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 55,
        paddingVertical: 2.5,
        marginHorizontal: "5%",
        marginBottom: 10
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
    nombre: {
        fontWeight: "bold",
    },
    descripcion: {
        color: "#606060"
    },
    fecha: {
        backgroundColor: "#FFFF00",
        borderRadius: 7,
        justifyContent: "center",
        paddingHorizontal: 7,
        height: 30
    },
    fechatexto: {
        color: "#606060"
    },
    cajafecha: {
        justifyContent: "center"
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
    nombreModal: {
        fontWeight: "bold",
        color: "#ffffff"
    },
    razonModal: {
        color: "#ffffff"
    },
    fechaModal: {
        color: "#ffffff"
    },
    contenidoModal: {
        maxHeight: 200,
        padding: 10
    },
    descripcionModal: {
        color: "#606060",
        fontSize: 15,
        textAlign: "justify",
        fontWeight: "500"
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