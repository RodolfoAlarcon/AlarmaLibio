import React, { useRef, useEffect, useState } from 'react';
import {
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export const BottomStopAlarma = (props: any) => {

    const [animated, setAnimated] = useState(false)
    const [bottomOne, setBottomOne] = useState(0)  // Initial value for opacity: 0
    const [bottomDos, setBottomDos] = useState(0)
    const [bottomTres, setBottomTres] = useState(0)

    useEffect(() => {
        setTimeout(function () {
            setBottomOne(0.1)
        }, 100);
        setTimeout(function () {
            setBottomOne(0.02)
        }, 200);
        setTimeout(function () {
            setBottomOne(0.03)
        }, 300);
        setTimeout(function () {
            setBottomOne(0.04)
        }, 400);
        setTimeout(function () {
            setBottomOne(0.05)
        }, 500);
        setTimeout(function () {
            setBottomOne(0.06)
        }, 600);
        setTimeout(function () {
            setBottomOne(0.07)
        }, 700);
        setTimeout(function () {
            setBottomOne(0.08)
        }, 800);
        setTimeout(function () {
            setBottomOne(0.09)
        }, 900);
        setTimeout(function () {
            setBottomOne(0.1)
        }, 1000);
        setTimeout(function () {
            setBottomOne(0.11)
            setBottomDos(0.01)
        }, 1100);
        setTimeout(function () {
            setBottomOne(0.12)
            setBottomDos(0.02)
        }, 1200);
        setTimeout(function () {
            setBottomOne(0.13)
            setBottomDos(0.03)
        }, 1300);
        setTimeout(function () {
            setBottomOne(0.14)
            setBottomDos(0.04)
        }, 1400);
        setTimeout(function () {
            setBottomOne(0.15)
            setBottomDos(0.05)
        }, 1500);
        setTimeout(function () {
            setBottomOne(0.16)
            setBottomDos(0.06)
        }, 1600);
        setTimeout(function () {
            setBottomOne(0.17)
            setBottomDos(0.07)
        }, 1700);
        setTimeout(function () {
            setBottomOne(0.18)
            setBottomDos(0.08)
        }, 1800);
        setTimeout(function () {
            setBottomOne(0.19)
            setBottomDos(0.09)
        }, 1900);
        setTimeout(function () {
            setBottomOne(0.2)
            setBottomDos(0.1)
        }, 2000);
        setTimeout(function () {
            setBottomOne(0.21)
            setBottomDos(0.11)
            setBottomTres(0.01)
        }, 2100);
        setTimeout(function () {
            setBottomOne(0.22)
            setBottomDos(0.12)
            setBottomTres(0.02)
        }, 2200);
        setTimeout(function () {
            setBottomOne(0.23)
            setBottomDos(0.13)
            setBottomTres(0.03)
        }, 2300);
        setTimeout(function () {
            setBottomOne(0.24)
            setBottomDos(0.14)
            setBottomTres(0.04)
        }, 2400);
        setTimeout(function () {
            setBottomOne(0.25)
            setBottomDos(0.15)
            setBottomTres(0.05)
        }, 2500);
        setTimeout(function () {
            setBottomOne(0.26)
            setBottomDos(0.16)
            setBottomTres(0.06)
        }, 2600);
        setTimeout(function () {
            setBottomOne(0.27)
            setBottomDos(0.17)
            setBottomTres(0.07)
        }, 2700);
        setTimeout(function () {
            setBottomOne(0.28)
            setBottomDos(0.18)
            setBottomTres(0.08)
        }, 2800);
        setTimeout(function () {
            setBottomOne(0.29)
            setBottomDos(0.19)
            setBottomTres(0.09)
        }, 2900);
        setTimeout(function () {
            setBottomOne(0.30)
            setBottomDos(0.2)
            setBottomTres(0.1)

        }, 3000);
        setTimeout(function (){
            setBottomOne(0)
            setBottomDos(0)
            setBottomTres(0)
            setAnimated(!animated)
        },3500)
    }, [animated])

    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View                 // Special animatable View
                style={{
                    width: 180,
                    height: 180,
                    borderRadius: 200,
                    backgroundColor: "#ffff002c",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 9,
                    borderWidth:2,
                    borderColor:"#FFFF00"
                    //opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                <Image
                    source={require("../Assets/Img/alarmaRojo.png")}
                    style={{ width: 100, height: 100, marginBottom: 10 }}
                />
            </View>
            <View style={{
                width: 215,
                height: 215,
                borderRadius: 400,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                opacity: bottomOne,         // Bind opacity to animated value
                backgroundColor:"#FFFF00"
            }}></View>
            <View style={{
                width: 250,
                height: 250,
                borderRadius: 400,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                opacity: bottomDos,         // Bind opacity to animated value
                backgroundColor:"#FFFF00"
            }}></View>
            <View style={{
                width: 285,
                height: 285,
                borderRadius: 400,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                opacity: bottomTres,         // Bind opacity to animated value
                backgroundColor:"#FFFF00"
            }}></View>
        </View>
    )

}

const styles = StyleSheet.create({
    buttomOne: {
        width: 100,
        height: 100,
        borderRadius: 200
    }
});