import { useState, useEffect } from "react";
import { instance } from "utils/axios/axios.js";

const useFetchData = (endpoint) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get(endpoint);
                setData(response.data);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchData();
    }, [endpoint]);

    return { data, error };
};

export default useFetchData;
