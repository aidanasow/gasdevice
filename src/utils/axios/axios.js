import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = import.meta.env.VITE_API_URL;

export const instance=()=> axios.create({
    baseURL:BASE_URL,
    withCredentials: true,
});

instance().interceptors.request.use((config) => {
    const csrftoken = Cookies.get("csrftoken");
    if (csrftoken) {
        config.headers["X-CSRFToken"] = csrftoken;
    }
    return config;
}, error => {
    return Promise.reject(error);
});


