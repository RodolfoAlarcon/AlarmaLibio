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
    FlatList
} from 'react-native';
import WS from 'react-native-websocket';
import { useNavigation } from '@react-navigation/native';

export const ListaCamaras = (props: any) => {
    const navigation = useNavigation();
    const [data, setData] = useState([])


    const ws = new WebSocket('wss://nodemcumicropython.herokuapp.com/ws/socket-server/') 
   
   
       useEffect(()=>{
        ws.addEventListener('open', (event) => {
            console.log('paso')
            // ws.send("cmd_option: 3");
            // ws.send(JSON.stringify({cmd_option: '3'})); 
            /// aqui se esta ejecutando cada vez que se abre una conexion
            /// "open" es el evento de onOpen, en apertura de conexion
          });
    
          ws.onmessage = (e) => {
            let dat = JSON.parse(e.data);
            console.log(dat.canales)
            setData(dat.canales)
           }

        //    ws.send(JSON.stringify({
        //     'message':`cmd 3`,
        //     'cmd_option':3,
        //     'type':'message',
        //     'name': "Nombre",
        //     'id_key': "KEY PC ! "}))
       },[])
 
    const _renderItem = (item: any) => {
    
        return (
            <View>
                <TouchableOpacity
                    style={styles.container}
                    key={item}
                    onPress={()=>goToScreen('CamaraScreen', item)}
                >
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={require("../Assets/Img/camaraRojo.png")}
                            style={{ width: 40, height: 30 }}
                        />
                        <Text style={styles.nombre}>
                            {item}
                        </Text>
                    </View>
                    <View style={{ height: 55, justifyContent: "center" }}>
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
        <>
            <FlatList
                numColumns={1}
                data={data}
                renderItem={({ item }) => _renderItem(item)}
                keyExtractor={(item: any, index) => index.toString()}
                style={{ width: '100%' }}
            />
        </>

    )
    function goToScreen(routeName:any, anuncio:any) {
        navigation.navigate(routeName as never, { camara: anuncio } as never)
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 55,
        paddingVertical: 2.5,
        marginHorizontal: "5%",
        marginBottom: 10,
        justifyContent: "space-between"
    },
    icono: {
        width: 30,
        height: 30
    },
    nombre: {
        color: "#606060",
        marginLeft: 10
    }
});