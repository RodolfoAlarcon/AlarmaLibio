import React, { useState } from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from "../Components/Input";
import CheckBox from "@react-native-community/checkbox"
import { useNavigation } from '@react-navigation/native';


export const ResetPassword = () => {
    const navigation = useNavigation();
    //const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    source={require("../Assets/Img/Logo.png")}
                    style={styles.logo}
                />
            </View>
            <View style={{ maxWidth: 280, width: "100%", marginVertical: 25 }}>
                <Text style={{ color: "#606060", fontWeight: "bold" }}>
                    ESCRIBA AQUI SU NUEVA CONTRASEÑA
                </Text>
                <Input
                    keyboardType="default"
                    placeholder="*****"
                />
                <Text style={{ color: "#606060", fontWeight: "bold", marginTop:15 }}>
                    REPETIR CONTRASEÑA
                </Text>
                <Input
                    keyboardType="default"
                    placeholder="*****"
                />
            </View>
            <View style={{ maxWidth: 280, width: "100%" }}>
                <TouchableOpacity style={styles.Boton} onPress={()=> navigation.navigate("Login")}>
                    <Text style={styles.textoboton}>
                        CAMBIAR
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    Boton: {
        backgroundColor: "#E30613",
        borderRadius: 15,
        padding: 12,
    },
    textoboton: {
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "bold"
    },
    textonorecuerdo: {
        color: "#E30613",
        marginTop: 10,
        textAlign: "center",
        fontWeight: "600"
    },
    logo: {
        marginBottom: 0
    }
})