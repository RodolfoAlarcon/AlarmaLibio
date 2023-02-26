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


export const ListaVecions = (props: any) => {

    const [modal, setModal] = useState(false);
    const [itemModal, setItemModal] = useState([])
    const navigation = useNavigation();
    const { user } = useContext(AuthContex)

    const _handleModal = () => {
        let result
        result = props.data.filter((e: any) => e.id == itemModal)
        console.log(result)
        return (
            <View style={styles.modalHijo}>
                <View style={styles.headerModal}>
                    <View>
                        <Image
                            source={require("../Assets/Img/perfil.jpg")}
                            style={{ width: 45, height: 45, borderRadius: 100 }}
                        />
                    </View>
                    <View style={styles.subcontainer}>
                        <Text style={styles.nombreModal}>
                            {result[0].name}
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
                        <View style={{ flexDirection: "row", marginTop: 10, alignItems: "flex-end" }}>
                            <Image
                                source={require("../Assets/Img/gps.png/")}
                                style={{ width: 20, height: 20, }}
                            />
                            <Text style={[styles.descripcionModal, { marginLeft: 5 }]} numberOfLines={1}>
                                {result[0].email}
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10, alignItems: "flex-end" }}>
                            <Image
                                source={require("../Assets/Img/numero.png/")}
                                style={{ width: 20, height: 20, }}
                            />
                            <Text style={[styles.descripcionModal, { marginLeft: 5 }]} numberOfLines={1}>
                                {result[0].phone}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
                {}
                <View style={styles.footerModal}>
                    {result[0].id !== user.id ?
                        <TouchableOpacity onPress={() => { setModal(false), setItemModal([]), goToScreen('DenunciasScreen', result[0].id) }}>
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
                <View style={styles.container}>
                    <View>
                        <Image
                            source={require("../Assets/Img/perfil.jpg")}
                            style={{ width: 50, height: 50, borderRadius: 100 }}
                        />
                    </View>
                    <View style={styles.subcontainer}>
                        <Text style={[styles.nombre, { color: "#606060" }]}>
                            {item.name}
                        </Text>
                        <Text style={styles.descripcion} numberOfLines={1}>
                            {item.ubicacion}
                        </Text>
                    </View>
                    <View style={styles.cajafecha}>
                        <TouchableOpacity
                            style={styles.fecha}
                            onPress={() => { setModal(true), setItemModal(item.id) }}
                        >
                            <Text style={styles.fechatexto}>
                                DETALLES
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }


    return (
        <>
            <FlatList
                numColumns={1}
                data={props.data}
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
        backgroundColor: "#E30613",
        padding: 12.5,
        paddingHorizontal: "3%",
        flexDirection: "row"
    },
    nombreModal: {
        fontWeight: "bold",
        color: "#ffffff",
        fontSize: 20
    },
    razonModal: {
        color: "#606060"
    },
    fechaModal: {
        color: "#606060"
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