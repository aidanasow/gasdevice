import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_API_URL;

const createRequester = () =>
    axios.create({
        baseURL: BASE_URL,
        withCredentials: true,
    });

export const postApi = createRequester();
export const instance = createRequester();



postApi.interceptors.request.use((config) => {
    const csrftoken = Cookies.get("csrftoken");
    if (csrftoken) {
        config.headers["X-CSRFToken"] = csrftoken;
    }
    return config;
}, error => {
    return Promise.reject(error);
});


