import { User } from './UserInterface';

export interface Grupos {
    grupo:        string;
    grupo_id:     string;
    arduino_name: string;
    arduino_id:   string;
    usuarios:     User[];
}