import React from 'react';
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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const ListaConfiguracion = () => {

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
            <TouchableOpacity style={styles.hijo}>
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