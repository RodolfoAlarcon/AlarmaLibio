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
    FlatList
} from 'react-native';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        nombre: 'Camara 1',
        /*fecha: 'ENE 3, 10:30',
        descripcion: 'Hay un carro estacionado fuera de mi casa, no conozco a las personas que están dentro, por favor vecinos si alguien los conoce, comuníquelo',
        ubicacion: 'Alborada 2da etp. Mz. 34 Villa 20',
        numero: '0993371891',
        tipoAlarma: 'PERSONAS SOSPECHOSAS'*/
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        nombre: 'Camara 2',
        /*fecha: 'ENE 05, 15:30',
        descripcion: 'Hay un carro estacionado fuera de mi casa, no conozco a las personas que están dentro, por favor vecinos si alguien los conoce, comuníquelo',
        ubicacion: 'Alborada 2da etp. Mz. 34 Villa 22',
        numero: '0993371892',
        tipoAlarma: 'ALERTA INCENDIO'*/
    },
];

export const ListaCamaras = (props: any) => {

    const _renderItem = (item: any) => {
        return (
            <View>
                <TouchableOpacity
                    style={styles.container}
                    key={item.arduino_id}
                >
                    <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
                        <Image
                            source={require("../Assets/Img/camaraRojo.png")} 
                            style={{width:40,height:30}}
                        />
                        <Text style={styles.nombre}>
                            {item.arduino_name}
                        </Text>
                    </View>
                    <View style={{height:55, justifyContent:"center"}}>
                        <Image 
                            source={require("../Assets/Img/flecha.png")}
                            style={styles.icono}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }



    return (
        <FlatList
        numColumns={1}
        data={props.data}
        renderItem={({ item }) => _renderItem(item)}
        keyExtractor={(item: any, index) => index.toString()}
        style={{ width: '100%' }}
    />
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 55,
        paddingVertical: 2.5,
        marginHorizontal: "5%",
        marginBottom: 10,
        justifyContent:"space-between"
    },
    icono: {
        width: 30,
        height: 30
    },
    nombre:{
        color:"#606060",
        marginLeft:10
    }
});