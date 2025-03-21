import UseFetchData from "utils/hooks/UseFetchData.js";

export const UseContacts = () => {
    const { data, error } = UseFetchData("5_contact/");

    const contactsData = data ? data[0] : null;

    return { contactsData, error };
};
