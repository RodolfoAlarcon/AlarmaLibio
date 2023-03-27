import React, { useState, useContext, useEffect } from "react";
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
import { HeaderDeep } from '../../../Components/HeaderDeep';
import { Input } from "../../../Components/Input";
import { Formik } from 'formik';
import { AuthContex } from '../../../context/UsuarioContext'
import MultiSelect from 'react-native-multiple-select';
import { useNavigation } from '@react-navigation/native';
import apiApp from '../../../api/api'

export const EditarPerfil = () => {
    const navigator = useNavigation()
    const { editPerfil, user } = useContext(AuthContex)
    const [address, setAddress] = useState<any>({
        "countrys": [],
        "citys": [],
        "sectors": [],
        "provinces": []

    })
    const [provinces, setProvinces] = useState<any>([])
    const [sectors, setSectors] = useState<any>([])
    const [citys, setCitys] = useState<any>([])

    const [selectProvinces, setSelectProvinces] = useState<any>(user.provincia_id)
    const [selectCity, setSelectCity] = useState<any>(user.ciudad_id)
    const [selectSector, setSelectSector] = useState<any>(user.sector_id)

    const onSelectedItemsChangeProvincia = (selectedItemsP: any) => {
        setSelectCity('')
        setSelectSector('')

        getCitys(selectedItemsP[0])
        setSelectProvinces(selectedItemsP);
    };

    const onSelectedItemsChangeCity = (selectedItemsC: any) => {
        setSelectSector('')
        getSectors(selectedItemsC[0])
        setSelectCity(selectedItemsC);
    };

    const onSelectedItemsChangeSector = (selectedItemsS: any) => {
        console.log(selectedItemsS)
        setSelectSector(selectedItemsS);
    };

    function getSectors(id: any) {
        let array: any = [];
        address.sectors.map((n: any) => {
            if (n.ciudades_id == id) {
                array.push({ name: n.name, id: n.id })
            }
        })
        setSectors(array)
    }

    function getCitys(id: any) {
        let array: any = [];
        address.citys.map((n: any) => {
            if (n.provincia_id == id) {
                array.push({ name: n.name, id: n.id })
            }
        })
        setCitys(array)
    }

    function getProvinces(id: any) {
        let array: any = [];
        address.provinces.map((n: any) => {
            if (n.paises_id == id) {
                array.push({ name: n.name, id: n.id })
            }
        })
        setProvinces(array)
    }

    useEffect(() => {
        async function getFetech() {
            try {
                const resp = await apiApp.get('/getCountry')
                console.log(resp.data)
                if (typeof resp.data === 'object') {
                    setAddress(resp.data)
                } else {
                    setAddress({
                        "countrys": [],
                        "citys": [],
                        "sectors": [],
                        "provinces": []
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
        getFetech()

    }, [])
 
    useEffect(() => {
        getProvinces(user.paises_id)
    }, [address])
console.log(provinces)
    return (
        <SafeAreaView>
            <HeaderDeep
                titulo="CONFIGURACIÓN"
                icono="configuracion"
                descripcion="EN ESTA LISTA SE ENCUENTRAN TODAS LAS PERSONAS QUE ESTÁN CONECTADAS CON LA ALARMA."
                retroceder={true}
            />
            <ScrollView style={styles.container}>
                <Formik
                    initialValues={{
                        id: user.id,
                        name: user.name,
                        apellido: user.apellido,
                        phone: user.phone,
                        access_token: user.access_token
                    }}
                    onSubmit={async (values: any) => {
                        values.provincia_id= selectProvinces[0];
                        values.ciudad_id = selectCity[0];
                        values.sector_id =  selectSector[0],
                        console.log(values)
                        const res = await editPerfil(values)
                        if (res == true) {
                           
                            await goToBackScreen();

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
                                Nombre
                            </Text>
                            <Input
                                placeholder={"Nombre"}
                                value={values.name}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                            />
                            <Text style={styles.texto}>
                                Apellido
                            </Text>
                            <Input
                                placeholder={"apellido"}
                                value={values.apellido}
                                onChangeText={handleChange('apellido')}
                                onBlur={handleBlur('apellido')}
                            />
                            <Text style={styles.texto}>
                                Telefóno
                            </Text>
                            <Input
                                placeholder={"Telefóno"}
                                value={values.phone}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                            />
                            <Text style={styles.texto}>
                                Provincia
                            </Text>

                            <MultiSelect
                                items={provinces}
                                uniqueKey="id"
                                single={true}
                                onSelectedItemsChange={onSelectedItemsChangeProvincia}
                                selectedItems={selectProvinces}
                                selectText="Seleciona una provincia"
                                searchInputPlaceholderText="Buscar provincia..."
                                onChangeInput={(text) => console.log(text)}
                                altFontFamily="ProximaNova-Light"
                                tagRemoveIconColor="#CCC"
                                tagBorderColor="#CCC"
                                tagTextColor="#CCC"
                                selectedItemTextColor="#CCC"
                                selectedItemIconColor="#CCC"
                                itemTextColor="#000"
                                displayKey="name"
                                styleTextDropdownSelected={{
                                    textAlign: 'center'
                                }}
                                styleDropdownMenuSubsection={{
                                    paddingHorizontal: 10,
                                    paddingVertical: 10,
                                    height: 45,
                                    backgroundColor: '#F0F0F0',
                                    //color: '#000',
                                    borderRadius: 15,
                                    marginTop: 15,
                                    borderColor: 'red',
                                    borderWidth: 2,

                                }}
                                styleTextDropdown={{
                                    //color: '#000',
                                    textAlign: 'center'
                                }}
                                /*searchInputStyle={{ 
                                    paddingHorizontal: 20,
                                    paddingVertical: 10,
                                    backgroundColor: '#F0F0F0',
                                    color: '#000',
                                    borderColor:'red',
                                    borderWidth:5,
                                    borderRadius: 10,
                                 }}*/
                                submitButtonColor="#CCC"
                                submitButtonText="Submit"

                            />
                            <Text style={styles.texto}>
                                Ciudad
                            </Text>
                            <MultiSelect
                                items={citys}
                                uniqueKey="id"
                                single={true}
                                onSelectedItemsChange={onSelectedItemsChangeCity}
                                selectedItems={selectCity}
                                selectText="Seleciona una Ciudad"
                                searchInputPlaceholderText="Buscar Ciudad..."
                                onChangeInput={(text) => console.log(text)}
                                altFontFamily="ProximaNova-Light"
                                tagRemoveIconColor="#CCC"
                                tagBorderColor="#CCC"
                                tagTextColor="#CCC"
                                selectedItemTextColor="#CCC"
                                selectedItemIconColor="#CCC"
                                itemTextColor="#000"
                                displayKey="name"
                                styleTextDropdownSelected={{
                                    textAlign: 'center'
                                }}
                                styleDropdownMenuSubsection={{
                                    paddingHorizontal: 10,
                                    paddingVertical: 10,
                                    height: 45,
                                    backgroundColor: '#F0F0F0',
                                    //color: '#000',
                                    borderRadius: 15,
                                    marginTop: 15,
                                    borderColor: 'red',
                                    borderWidth: 2,

                                }}
                                styleTextDropdown={{
                                    //color: '#000',
                                    textAlign: 'center'
                                }}
                                /*searchInputStyle={{ 
                                    paddingHorizontal: 20,
                                    paddingVertical: 10,
                                    backgroundColor: '#F0F0F0',
                                    color: '#000',
                                    borderColor:'red',
                                    borderWidth:5,
                                    borderRadius: 10,
                                 }}*/
                                submitButtonColor="#CCC"
                                submitButtonText="Submit"

                            />

                            <Text style={styles.texto}>
                                Sector
                            </Text>
                            <MultiSelect
                                items={sectors}
                                uniqueKey="id"
                                single={true}
                                onSelectedItemsChange={onSelectedItemsChangeSector}
                                selectedItems={selectSector}
                                selectText="Seleciona una Ciudad"
                                searchInputPlaceholderText="Buscar Ciudad..."
                                onChangeInput={(text) => console.log(text)}
                                altFontFamily="ProximaNova-Light"
                                tagRemoveIconColor="#CCC"
                                tagBorderColor="#CCC"
                                tagTextColor="#CCC"
                                selectedItemTextColor="#CCC"
                                selectedItemIconColor="#CCC"
                                itemTextColor="#000"
                                displayKey="name"
                                styleTextDropdownSelected={{
                                    textAlign: 'center'
                                }}
                                styleDropdownMenuSubsection={{
                                    paddingHorizontal: 10,
                                    paddingVertical: 10,
                                    height: 45,
                                    backgroundColor: '#F0F0F0',
                                    //color: '#000',
                                    borderRadius: 15,
                                    marginTop: 15,
                                    borderColor: 'red',
                                    borderWidth: 2,

                                }}
                                styleTextDropdown={{
                                    //color: '#000',
                                    textAlign: 'center'
                                }}
                                /*searchInputStyle={{ 
                                    paddingHorizontal: 20,
                                    paddingVertical: 10,
                                    backgroundColor: '#F0F0F0',
                                    color: '#000',
                                    borderColor:'red',
                                    borderWidth:5,
                                    borderRadius: 10,
                                 }}*/
                                submitButtonColor="#CCC"
                                submitButtonText="Submit"

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
        marginBottom: 40,
        marginTop: 30
    },
    textoboton: {
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "bold",
    },
});