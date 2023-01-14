import { Grupos } from './GruposInterface';


export interface loginResponse {
    status:       number;
    user:         User;
    access_token: string;
    data_group:   Grupos[];
    token_type:   string;
    expires_at:   Date;
}


export interface User {
    id: string;
    name: string;
    apellido: string;
    sexo: string;
    edad: string;
    email: string;
    phone: string;
    dni: string;
    rol: string;
    direccion: string;
    ciudad_id: string;
    sector_id: string;
    email_verified_at: string;
    access_token: string;
    deleted_at: string;
    created_at: Date;
    updated_at: Date;
}
