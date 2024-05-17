import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.homologation.cliqdrive.com.br/auth',
}); 

api.interceptors.request.use( async (config) => {
    const bearerToken = import.meta.env.VITE_TOKEN
    config.headers.Authorization = `Bearer ${bearerToken}`;
    config.headers.Accept = 'application/json;version=v1_web';
    config.headers["Content-Type"] = 'application/json';

    const dataLocalStorage = await config.data

    if (dataLocalStorage) {
        localStorage.setItem("email", dataLocalStorage.email);
        localStorage.setItem("password", dataLocalStorage.password);
        localStorage.getItem("token") !== undefined ? localStorage.setItem("token", bearerToken) : false 
        return {...config, data: dataLocalStorage};
    }
  
    return config;
}, (error) => {
    return console.log(error);
});

export default api;

