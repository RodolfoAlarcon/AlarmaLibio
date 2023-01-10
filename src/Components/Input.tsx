import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

export const Input = (props: any) => {

    let password
    
    if(props.password == undefined){
        password = false
    }
    else{
        password = true
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                numberOfLines={1}
                multiline={false}
                keyboardType={props.keyboardType}
                color="#606060"
                placeholderTextColor="#565656"
                secureTextEntry={password}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        width:"100%",
        height:40,
        borderWidth:2,
        borderColor:"red",
        borderRadius:10,
        marginVertical:5,
        paddingHorizontal:10
    }
})