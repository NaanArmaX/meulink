import axios from 'axios';


export const key = "e4d1e91e27fb3d80532f6a84c384acd8180b6d0e"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers:{'Authorization':`Bearer ${key}`}
})

export default api;