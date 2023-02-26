import React, { useState, useRef, useEffect, useContext } from 'react';
import { BackHandler } from "react-native";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Header } from '../../Components/Header';
import { AuthContex } from '../../context/UsuarioContext'
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { Input } from "../../Components/Input";

export const DenunciasScreen = (props: any) => {
    const { user, postDenuncia } = useContext(AuthContex)
    const navigator = useNavigation()
    const { params } = props.route;
    return (

        <SafeAreaView>
            <Header
                titulo="Denuncia"
                descripcion="SI DESEAS REPORTAR A UN USUARIO POR USO INDEVIDO DEL SERVICIO"
                icono="DENUNCIA"
            />
            <ScrollView style={styles.container}>
                <Formik
                    initialValues={{
                        id_user: params.id,
                        id_demandant: user.id,
                        access_token: user.access_token,
                        menssage: '',
                    }}
                    onSubmit={async (values: any) => {
                        if (values.menssage !== '') {
                            const res = await postDenuncia(values)
                            if (res == true) {

                                await goToBackScreen();

                            }
                        } else {
                            alert('No ha dicho un motivo por denuncia')
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
                        <View style={{ width: '80%', marginLeft: '10%' }} >
                            <Text style={styles.texto}>
                                Motivo de la denuncia
                            </Text>

                            <TextInput
                                style={styles.input}
                                placeholder={"Descripción de la denuncia"}
                                value={values.menssage}
                                onChangeText={handleChange('menssage')}
                                onBlur={handleBlur('menssage')}
                                multiline={true}
                                numberOfLines={4}
                            />


                            <TouchableOpacity style={styles.Boton} onPress={() => handleSubmit()}>
                                <Text style={styles.textoboton}>
                                    ENVIAR
                                </Text>
                            </TouchableOpacity>
                        </View>
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
        paddingTop: 15
    },
    texto: {
        color: "#606060",
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
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
    input:{
        width:"100%",
        borderWidth:2,
        borderColor:"red",
        borderRadius:10,
        marginVertical:5,
        paddingHorizontal:10
    }

});
