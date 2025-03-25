import { createContext, useContext, useEffect, useState } from "react";
import UseFetchData from "utils/hooks/UseFetchData.js";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const { data: contacts, error: contactsError } = UseFetchData("5_contact/");
    const { data: heroBlock, error: heroBlockError } = UseFetchData("1_hiro-block/");

    const [contactsData, setContactsData] = useState(null);
    const [heroBlockData, setHeroBlockData] = useState(null);

    useEffect(() => {
        if (contacts) setContactsData(contacts[0]);
    }, [contacts]);

    useEffect(() => {
        if (heroBlock) setHeroBlockData(heroBlock[0]);
    }, [heroBlock]);

    return (
        <DataContext.Provider
            value={{
                contactsData,
                heroBlockData,
                contactsError,
                heroBlockError,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => useContext(DataContext);
