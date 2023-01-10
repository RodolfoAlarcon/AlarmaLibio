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


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        nombre: 'Carlos Perez',
        fecha: 'ENE 3, 10:30',
        descripcion: 'Hay un carro estacionado fuera de mi casa, no conozco a las personas que están dentro, por favor vecinos si alguien los conoce, comuníquelo',
        ubicacion: 'Alborada 2da etp. Mz. 34 Villa 20',
        numero: '0993371891',
        tipoAlarma: 'PERSONAS SOSPECHOSAS'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        nombre: 'Mario Rodriguez',
        fecha: 'ENE 05, 15:30',
        descripcion: 'Hay un carro estacionado fuera de mi casa, no conozco a las personas que están dentro, por favor vecinos si alguien los conoce, comuníquelo',
        ubicacion: 'Alborada 2da etp. Mz. 34 Villa 22',
        numero: '0993371892',
        tipoAlarma: 'ALERTA INCENDIO'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        nombre: 'Sandra Castillo',
        fecha: 'ENE 03, 05:30',
        descripcion: 'Hay un carro estacionado fuera de mi casa, no conozco a las personas que están dentro, por favor vecinos si alguien los conoce, comuníquelo',
        ubicacion: 'Alborada 2da etp. Mz. 34 Villa 23',
        numero: '0993371893',
        tipoAlarma: 'ROBO O ASALTO'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d54',
        nombre: 'Mario Ortiz',
        fecha: 'ENE 01, 10:30',
        descripcion: 'Hay un carro estacionado fuera de mi casa, no conozco a las personas que están dentro, por favor vecinos si alguien los conoce, comuníquelo',
        ubicacion: 'Alborada 2da etp. Mz. 34 Villa 24',
        numero: '0993371894',
        tipoAlarma: 'ALERTA MEDICA'
    },
];


export const ListaVecions = () => {

    const [modal, setModal] = useState(false);
    const [itemModal, setItemModal] = useState(null)


    const _handleModal = () => {
        let result
        result = DATA.filter(e => e.id == itemModal)
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
                            {result[0].nombre}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{ justifyContent: "center", paddingLeft: 10 }}
                        onPress={() => { setModal(false), setItemModal(null) }}
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
                                {result[0].ubicacion}
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10, alignItems: "flex-end" }}>
                            <Image
                                source={require("../Assets/Img/numero.png/")}
                                style={{ width: 20, height: 20, }}
                            />
                            <Text style={[styles.descripcionModal, { marginLeft: 5 }]} numberOfLines={1}>
                                {result[0].numero}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.footerModal}>
                    <View style={styles.botonModal}>
                        <Text style={styles.textBotonmodal}>
                            DENUNCIAR
                        </Text>
                    </View>
                </View>
            </View>
        )
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
                            {item.nombre}
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
                data={DATA}
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
        fontSize:20
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