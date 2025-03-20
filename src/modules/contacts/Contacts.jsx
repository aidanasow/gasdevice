import classes from "./Contacts.module.scss";
import {Container} from "ui/container/Container.jsx";
import {Typography} from "ui/typography/Typography.jsx";
import {Phone} from "assets/icons/Phone.jsx";
import {Mark} from "assets/icons/Mark.jsx";
import {Email} from "assets/icons/Email.jsx";
import {RequestForm} from "./requestForm/RequestForm.jsx";

export const Contacts = () => {
    return (
        <Container>
            <section className={classes.contacts}>
                <div className={classes.contactsLeft}>
                    <Typography variant={"h2"}>
                        Контакты
                    </Typography>
                    <ul>
                        <li>
                            <Phone/>
                            <Typography variant={"h3"}>
                                +996 (500) 848 404
                            </Typography>
                        </li>
                        <li>
                            <Email/>
                            <Typography variant={"h3"}>
                                +996 (500) 848 404
                            </Typography>
                        </li>
                        <li>
                            <Mark/>
                            <Typography variant={"h3"}>
                                +996 (500) 848 404
                            </Typography>
                        </li>

                    </ul>
                    <div className={classes.contactsLeftMap}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2923.962341064259!2d74.61245!3d42.873639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7c6790912cd%3A0xe45a30fe9a869871!2z0JPQvtC70L7QstC90L7QuSDQvtGE0LjRgSDQvNC-0LHQuNC70YzQvdC-0LPQviDQvtC_0LXRgNCw0YLQvtGA0LAg0J4h!5e0!3m2!1sru!2seg!4v1742324219842!5m2!1sru!2seg"
                            width="100%" height="100%"  allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>
                <RequestForm/>
            </section>
        </Container>
    );
};
