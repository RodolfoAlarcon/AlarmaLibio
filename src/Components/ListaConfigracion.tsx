import React,{ useContext} from 'react';
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
    Alert,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContex } from '../context/UsuarioContext'

export const ListaConfiguracion = () => {
    const { logOut } = useContext(AuthContex)
    const navigation = useNavigation();

    return (
        <View style={styles.padre}>
            <TouchableOpacity style={styles.hijo} onPress={()=> navigation.navigate("EditarPerfil")}>
                <Text style={styles.texto}>
                    EDITAR PERFIL
                </Text>
                <Image
                    source={require("../Assets/Img/flecha.png")}
                    style={styles.icono}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.hijo} onPress={()=> navigation.navigate("CambiarPassword")}>
                <Text style={styles.texto}>
                    CAMBIAR CONTRASEÑA
                </Text>
                <Image
                    source={require("../Assets/Img/flecha.png")}
                    style={styles.icono}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.hijo} onPress={()=> navigation.navigate("Notificacion")}>
                <Text style={styles.texto}>
                    NOTIFICACIÓN
                </Text>
                <Image
                    source={require("../Assets/Img/flecha.png")}
                    style={styles.icono}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.hijo} onPress={()=> navigation.navigate("Ayuda")}>
                <Text style={styles.texto}>
                    AYUDA
                </Text>
                <Image
                    source={require("../Assets/Img/flecha.png")}
                    style={styles.icono}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.hijo}
                onPress={()=>cerrarSesion()}
            >
                <Text style={styles.texto}>
                    CERRAR SESIÓN
                </Text>
                <Image
                    source={require("../Assets/Img/flecha.png")}
                    style={styles.icono}
                />
            </TouchableOpacity>
        </View>
    )

    function cerrarSesion() {
        Alert.alert("Salir", "Seguro de \n Salir de La Sesion?",
            [
                {
                    text: "Si", onPress: () => {
                        logOut()
                        //,goToScreen('LoginScreen')
                    }
                },
                {
                    text: "No", onPress: () => { }, style: 'cancel'
                }
            ]
        )
    }
}
const styles = StyleSheet.create({
    padre: {
        paddingTop: 30
    },
    hijo: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    texto: {
        color: "#606060",
        fontWeight: "900",
        fontSize: 20
    },
    icono: {
        width: 20,
        height: 20
    }
});