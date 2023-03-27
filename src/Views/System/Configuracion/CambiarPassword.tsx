import React, { useState, useContext, useEffect }  from "react";
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
import { AuthContex } from '../../../context/UsuarioContext'
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

export const CambiarPassword = () => {
    const navigator = useNavigation()
    const { user, editPassword } = useContext(AuthContex)

    return (
        <SafeAreaView>
            <Header
                titulo="CONFIGURACIÓN"
                icono="configuracion"
                descripcion="EN ESTA LISTA SE ENCUENTRAN TODAS LAS PERSONAS QUE ESTÁN CONECTADAS CON LA ALARMA."
                retroceder={true}
            />
            <ScrollView style={styles.container}>

                <Formik
                    initialValues={{
                        id: user.id,
                        access_token: user.access_token,
                        oldPassword: '',
                        newPassword: '',
                        newPasswordRepeat: ''
                    }}
                    onSubmit={async (values: any) => {
                        if(values.newPassword == values.newPasswordRepeat){
                            const res = await editPassword(values)
                            if (res == true) {

                                await goToBackScreen();
    
                            }
                        }else{
                            alert('contraseñas no coinciden')
                        }
                    }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        handleFileUpload,
                        errors,
                        touched,
                        isValid,
                    }: any) => (
                        <>
                            <Text style={styles.texto}>
                                Contraseña Actual:
                </Text>
                            <Input
                                keyboardType="password"
                                placeholder={"Contraseña Actual"}
                                value={values.oldPassword}
                                onChangeText={handleChange('oldPassword')}
                                onBlur={handleBlur('oldPassword')}
                                password={true}
                            />
                            <Text style={styles.texto}>
                                Nueva Contraseña:
                </Text>
                            <Input
                                keyboardType="password"
                                placeholder={"Nueva Contraseña"}
                                value={values.newPassword}
                                onChangeText={handleChange('newPassword')}
                                onBlur={handleBlur('newPassword')}
                                password={true}
                            />
                            <Text style={styles.texto}>
                                Repetir Contraseña Nueva:
                </Text>
                            <Input
                                keyboardType="password"
                                placeholder={"Repetir Contraseña Nueva"}
                                value={values.newPasswordRepeat}
                                onChangeText={handleChange('newPasswordRepeat')}
                                onBlur={handleBlur('newPasswordRepeat')}
                                password={true}
                            />
                            <TouchableOpacity style={styles.Boton} onPress={() => handleSubmit()}>
                                <Text style={styles.textoboton}>
                                    ENVIAR
                    </Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    )
    function goToBackScreen() {
        navigator.goBack()
    }
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: Dimensions.get('window').height - 349,
        paddingTop: 10,
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