import classes from "./Contacts.module.scss";
import {Container} from "ui/container/Container.jsx";
import {Typography} from "ui/typography/Typography.jsx";
import {Phone} from "assets/icons/Phone.jsx";
import {Mark} from "assets/icons/Mark.jsx";
import {Email} from "assets/icons/Email.jsx";
import {RequestForm} from "./requestForm/RequestForm.jsx";
import {UseContacts} from "modules/contacts/api/UseContacts.js";
import parse from "html-react-parser";
export const Contacts = ({id}) => {
    const {contactsData, error}=UseContacts();
    if (error) return <p>Ошибка: {error}</p>;
    return (
        <Container>
            <section className={classes.contacts} id={id}>
                <div className={classes.contactsLeft}>
                    <Typography variant={"h2"}>
                        Контакты
                    </Typography>
                    <ul>
                        <li>
                            <Phone/>
                            <Typography variant={"h3"}>
                                {contactsData?.phone}
                            </Typography>
                        </li>
                        <li>
                            <Email/>
                            <Typography variant={"h3"}>
                                {contactsData?.email}
                            </Typography>
                        </li>
                        <li>
                            <Mark/>
                            <Typography variant={"h3"}>
                                {contactsData?.address}
                            </Typography>
                        </li>

                    </ul>
                    <div className={classes.contactsLeftMap}>
                        {typeof contactsData?.address_map === "string" ? parse(contactsData.address_map) : ""}
                    </div>

                </div>
                <RequestForm/>
            </section>
        </Container>
    );
};
