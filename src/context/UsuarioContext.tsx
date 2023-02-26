import React, { createContext, useReducer, useState, useEffect } from 'react';
import { userReducer, Authstate } from './UserReducer';
import { User, loginResponse } from '../interfaces/UserInterface';
import { Grupos } from '../interfaces/GruposInterface';
import apiApp from '../api/api'
import { io } from 'socket.io-client';
import Snackbar from 'react-native-snackbar';

type AuthContextProps = {
    status: 'cheking' | 'authenticated' | 'not-authenticated' | 'registered-phone' | 'registered-dates' | 'update' |'';
    access_token: string | null | '';
    user: User | null | '';
    grupos: Grupos[] | null | '';
    version: string;
    errorMessage: string;
    sing: (data: any, grupos: any, status: any) => void;
    logOut: () => void;
    singin: (data: any) => void;
    editPerfil: (data: any) => void;
    editPassword: (data: any) => void;
    sendAlarmaDescription: (id_user:any,id_group:any, type:any, access_token:any,msg:any)=>void;
    sendUpdateDescription: (id_user:any, access_token:any,id:any, msg:any)=>void;
    postDenuncia: (data: any) => void;
}

const initialSatate: Authstate = {
    status: 'cheking',
    errorMessage: '',
    access_token: null,
    version: '1.0',
    user: null,
    grupos: null,
}

const AuthContex = createContext({} as AuthContextProps);

    //========================DE USO
    /*var socket = new WebSocket('wss://nodemcumicropython.herokuapp.com/ws/socket-server/');

    socket.onopen = function(e:any) {
        alert("se establecio conexion");
      };
      
      socket.onmessage = function(event){
        console.log(event.data)
      };*/
    //========================
      
const UserProvider = ({ children }: any) => {
    const [login, dispatch] = useReducer(userReducer, initialSatate);

    const sing = async (user: any, grupos: any, status: any) => {
 
        dispatch({ type: 'sing-in', payload: { user: user, status: status, grupos: grupos} })
    }

    const singin = async (data: any) => {
        
        try {

            const resp = await apiApp.post<loginResponse>('/login', data)
            console.log(resp)
            dispatch({ type: 'login', payload: { access_token: resp.data.access_token, user: resp.data.user, grupos: resp.data.data_group} })
            return true;
        } catch (error) {
            dispatch({ type: 'addError', payload: error.response.data.message })
            return false;
        } 
    }

    const editPerfil = async (data: any) => {
        
        try {    
            const resp = await apiApp.post('/actulizarDatos', data)
        
            dispatch({ type: 'editPerfil', payload: { user: resp.data.user} })
            return true;
        } catch (error) {
            dispatch({ type: 'addError', payload: error.response.data.message })
            return false;
        }
    }

    const editPassword = async (data: any) => {
        
        console.log(data)
        try {    
            const resp = await apiApp.post('/actulizarContrasena', data)
            Snackbar.show({
                text: resp.data.message,
                duration: Snackbar.LENGTH_LONG,
            })
            return true;
        } catch (error) {
            dispatch({ type: 'addError', payload: error.response.data.message })
            return false;
        }
    }

    const logOut = () => {
        dispatch({ type: 'sing-out', payload: { access_token: null, user: null,  grupos:null} })

    }

    const sendAlarmaDescription = async (id_user:any,id_group:any, type:any, access_token:any,msg:any)=>{
        const array = {
            id_user:id_user,
            id_group:id_group,
            type:type,
            access_token: access_token,
            msg:msg,
        }
        try {

            const resp = await apiApp.post('/sendAlarmaDescription', array)
            Snackbar.show({
                text: resp.data.menssage,
                duration: Snackbar.LENGTH_LONG,
            })
            
            return {status: true,  resp: resp.data.id};
        } catch (error) {
            dispatch({ type: 'addError', payload: error.response.data.menssage })
            return {status: false};
        } 
    };

    const sendUpdateDescription = async (id_user:any, access_token:any,id:any, msg:any)=>{
        const array = {
            id_user:id_user,
            access_token:access_token,
            id:id,
            msg:msg,
        }
        try {

            const resp = await apiApp.post('/sendUpdateDescription', array)
            
            return {status: true,  resp: resp.data.menssage};
        } catch (error) {
            dispatch({ type: 'addError', payload: error.response.data.menssage })
            return false;
        } 
    };


    const postDenuncia = async (data:any)=>{
     
        try {

            const resp = await apiApp.post('/postDenuncia', data)
            Snackbar.show({
                text: resp.data.menssage,
                duration: Snackbar.LENGTH_LONG,
            })
            return true;
        } catch (error) {
            dispatch({ type: 'addError', payload: error.response.data.menssage })
            return false;
        }
    };

    return (
        <AuthContex.Provider value={{
            ...login,
            sing,
            logOut,
            singin,
            editPerfil,
            editPassword,
            sendAlarmaDescription,
            sendUpdateDescription,
            postDenuncia
            

        }} >
            {children}
        </AuthContex.Provider>
    )
}
export { AuthContex, UserProvider }