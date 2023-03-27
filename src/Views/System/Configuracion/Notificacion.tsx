import React, { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Header } from '../../../Components/Header';
import { Input } from "../../../Components/Input";
import CheckBox from "@react-native-community/checkbox"


export const Notificacion = () => {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [recibir, setRecibir] = useState(false)
    const [numero, setNumero] = useState(false)

    return (
        <SafeAreaView>
            <Header
                titulo="CONFIGURACIÓN"
                icono="configuracion"
                descripcion="EN ESTA LISTA SE ENCUENTRAN TODAS LAS PERSONAS QUE ESTÁN CONECTADAS CON LA ALARMA."
                retroceder={true}
            />
            <ScrollView style={styles.container}>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text>
                        Activar sonido de notificaciones.
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                    <CheckBox
                        disabled={false}
                        value={recibir}
                        onValueChange={(newValue) => setRecibir(newValue)}
                    />
                    <Text>
                        Recibir noticias y promociones.
                    </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                    <CheckBox
                        disabled={false}
                        value={numero}
                        onValueChange={(newValue) => setNumero(newValue)}
                    />
                    <Text>
                        Mis vecinos pueden ver mi número celular.
                    </Text>
                </View>

                <TouchableOpacity style={styles.Boton}>
                    <Text style={styles.textoboton}>
                        INICIAR
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('window').height - 349,
        paddingTop: 20,
        paddingHorizontal: "5%"
    },
    texto: {
        color: "#606060",
        marginTop: 10
    },
    Boton: {
        backgroundColor: "#E30613",
        borderRadius: 15,
        padding: 12,
        marginVertical: 10,
        marginBottom: 30
    },
    textoboton: {
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "bold"
    },
});