import React, { createContext, useReducer, useState, useEffect } from 'react';
import { saveUsuario, deleteUsuario } from '../storage/UsuarioAsyncStorage'
import { saveGrupos, deleteGrupos } from '../storage/GruposAsyncStorage'
import { User } from '../interfaces/UserInterface';
import { Grupos } from '../interfaces/GruposInterface';
import Snackbar from 'react-native-snackbar';

export interface Authstate {
    status: 'cheking' | 'authenticated' | 'not-authenticated' | 'registered-phone' | 'registered-dates' | 'update' | '';
    access_token: string | null | '';
    user: User | null | '';
    grupos: Grupos[] | null | '';
    errorMessage: string;
    version: string;
}

export type AuthAction =
    | { type: 'sing-in', payload: { user: User, status: string, grupos: Grupos[] } }
    | { type: 'login', payload: { access_token: string, user: User, grupos: Grupos[] } }
    | { type: 'editPerfil', payload: { user: User } }
    | { type: 'sing-out', payload: { access_token: null, user: null, grupos:null } }
    | { type: 'addError', payload: string }

export const userReducer = (state: Authstate, action: AuthAction): Authstate => {

    switch (action.type) {

        case 'sing-in':

            let oldAccess_token = ''

            if (action.payload.user !== null){
                oldAccess_token =  action.payload.user["access_token"]
            }
            return { ...state, 
                user: action.payload.user, 
                grupos: action.payload.grupos,
                status:  action.payload.status, 
                access_token: oldAccess_token, 
              }

        case 'login':

            action.payload.user["access_token"] = action.payload.access_token;

            saveUsuario(action.payload.user).then((msg) => {
                console.log('user save')
            })
            saveGrupos(action.payload.grupos).then((msg) => {
                console.log('user save')
            })

            return {
                ...state,
                user: action.payload.user,
                grupos: action.payload.grupos,
                status: 'authenticated',
                access_token: action.payload.access_token,
            }

            case 'editPerfil':
                state.user.name = action.payload.user.name,
                state.user.apellido = action.payload.user.apellido,
                state.user.phone =  action.payload.user.phone,
                state.user.provincia_id = action.payload.user.provincia_id,
                state.user.ciudad_id = action.payload.user.ciudad_id,
                state.user.sector_id = action.payload.user.sector_id
  
       
                saveUsuario(state.user).then((msg) => {
                    console.log('address save')
                })
    
                return {
                    ...state,
                    user: state.user,
    
                } 
            case 'sing-out':

            deleteUsuario().then((msg) => {
            })
            deleteGrupos().then((msg) => {
            })
            Snackbar.show({
                text: 'sesion Expirada',
                duration: Snackbar.LENGTH_LONG,
            })

            return {
                ...state,
                user: null,
                grupos: null,
                status: 'cheking',
                access_token: '',
            }

            case 'addError':
            Snackbar.show({
                text: action.payload,
                duration: Snackbar.LENGTH_LONG,
            })
            return {
                ...state,
                errorMessage: action.payload
            }
        default:

            return state
    }
}