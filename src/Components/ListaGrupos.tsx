import React, { useEffect, useState } from 'react';
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


export const ListaGrupos = (props: any) => {

    const navigation = useNavigation();

    const _renderItem = (item: any) => {
        return (
            <TouchableOpacity onPress={()=>goToScreen('VecinosScreen', item)}>
                <View style={styles.container}>
                    <View>
                        <Image
                            source={require("../Assets/Img/perfil.jpg")}
                            style={{ width: 50, height: 50, borderRadius: 100 }}
                        />
                    </View>
                    <View style={styles.subcontainer}>
                        <Text style={[styles.nombre, { color: "#606060" }]}>
                            {item.grupo}
                        </Text>
                       
                    </View>
                    {/*<View style={styles.cajafecha}>
                        <TouchableOpacity
                            style={styles.fecha}
                            onPress={() => { setModal(true), setItemModal(item.id) }}
                        >
                            <Text style={styles.fechatexto}>
                                DETALLES
                            </Text>
                        </TouchableOpacity>
                    </View>*/}
                </View>
            </TouchableOpacity>
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
        </>
    )
    function goToScreen(routeName:any, grupo:any) {
        navigation.navigate(routeName as never, { grupo: grupo } as never)
    }
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