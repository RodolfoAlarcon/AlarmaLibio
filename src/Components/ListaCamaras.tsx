import React, { useEffect, useState, useContext } from 'react';
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
    FlatList,
    BackHandler
} from 'react-native';
import WS from 'react-native-websocket';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { AuthContex } from '../context/UsuarioContext'
 
export const ListaCamaras = (props: any) => {

    const { user, grupos, sendAlarmaDescription } = useContext(AuthContex)
    const navigation = useNavigation();
    const [data, setData] = useState([])


    const ws = new WebSocket(`wss://nodemcumicropython.herokuapp.com/ws/${grupos[0].grupo_id}/`) 
   
   
       useEffect(()=>{
          
          ws.onmessage = (e) => {
            let dat = JSON.parse(e.data);
            console.log(dat.canales)
            setData(dat.canales)
           }

       },[])

       BackHandler.addEventListener('hardwareBackPress', function () {
        closeWS()
        });
        const isFocused = useIsFocused();
        if (!isFocused){
            closeWS()
        }
        function closeWS(){
            ws.close();
        }
        console.log(isFocused)
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