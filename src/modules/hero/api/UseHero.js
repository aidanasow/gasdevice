import {useEffect, useState} from "react";
import {instance} from "utils/axios/axios.js";
export const UseHero=()=>{
    const [data, setData] = useState(null);
    const [benefits, setBenefits]=useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance().get("1_hiro-block/");
                const data=response.data[0];
                setData(data);
                setBenefits(data.benefits);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    return {data,benefits, error};
};