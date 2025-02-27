import axios, { AxiosInstance } from "axios";
import BASE_URL from '../config/ApiConfig.ts';

const instance: AxiosInstance = axios.create({
    baseURL: BASE_URL
});

instance.interceptors.request.use(
    (config) => {
        let token = document.cookie.split('; ')
            .find(record => record.startsWith('token=')) || '';

        // Ensure that token is a string, or set it to an empty string if null
        token = token ? token.split('=')[1] || '' : '';

        // Now, TypeScript can correctly infer that token is a string
        config.headers.Authorization = token;

        return config;
    },
    (error) => { return Promise.reject(error); }
);

export default instance;

