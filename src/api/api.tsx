import axios from 'axios';

const apiApp = axios.create({
    baseURL: 'https://04.plastiriego.com/api/',
})



export default apiApp;