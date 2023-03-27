import React from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const HeaderSelecion = (props: any) => {


    const navigation = useNavigation();

    const titulo = props.titulo
    const icono = props.icono


    

    return (
        <View style={styles.container}>
             <TouchableOpacity style={{}}
                            onPress={() => navigation.goBack()}
                        >
                            <Image
                                source={require("../Assets/Img/back-white.png")}
                                style={{ width: 25, height: 25 }}
                            />
                        </TouchableOpacity>
                <Text style={styles.titulo}>
                    {titulo} 
                </Text>
                <View></View>
        </View>
    )


}
const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        backgroundColor: "#E4003A",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10
    },
    titulo: {
        fontSize: 25,
        color: "#FFFF00",
        fontWeight: "bold",
        textAlign:"center",
        marginLeft:5,
    },
    icono: {
        width: 65,
        height: 65
    }
});