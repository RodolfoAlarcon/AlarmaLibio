import React, { useState } from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Input } from "../Components/Input";
import CheckBox from "@react-native-community/checkbox"
import { useNavigation } from '@react-navigation/native';

export const Login = () => {
    const navigation = useNavigation();
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
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
                    ESCRIBA AQUI SU CORREO ELECTRÓNICO
                </Text>
                <Input
                    keyboardType="default"
                    placeholder="micorreo@ejemplo.com"
                />
                <Text style={{ color: "#606060", fontWeight: "bold", marginTop:15 }}>
                    ESCRIBA AQUI SU CONTRASEÑA
                </Text>
                <Input
                    keyboardType="password"
                    placeholder="******"
                    password="true"
                />
                {
                    <Text style={{color:"#E30613", fontSize:12, textAlign:"center",marginBottom:5}}>
                        El usuario o la contraseña no coincide
                    </Text>
                }
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <CheckBox 
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text>
                        Acepto las políticas y condiciones
                    </Text>
                </View>
            </View>
            <View style={{ maxWidth: 280, width: "100%" }}>
                <TouchableOpacity style={styles.Boton}>
                    <Text style={styles.textoboton}>
                        INICIAR
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("EnviarCorreo")}>
                    <Text style={styles.textonorecuerdo}>
                        No recuerdo mi contraseña
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
        marginVertical: 10
    },
    textoboton: {
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "bold"
    },
    textonorecuerdo: {
        color: "#E30613",
        marginTop:10,
        textAlign:"center",
        fontWeight:"600"
    },
    logo: {
        marginBottom: 0
    }
})