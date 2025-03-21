import classes from "./Footer.module.scss";
import {Container, Typography} from "ui/index.js";
import {BigLogo} from "assets/icons/BigLogo.jsx";
import {Phone, Email, Mark} from "assets/index.js";
import {Time} from "assets/icons/Time.jsx";
import {Call} from "assets/icons/Call.jsx";
import {UseContacts} from "modules/contacts/api/UseContacts.js";
import {useMediaQuery} from "utils/hooks/UseMediaQuery.js";
import {LogoIcon} from "assets/icons/LogoIcon.jsx";

export const Footer = () => {
    const {contactsData}=UseContacts();
    const phone=useMediaQuery("(max-width: 650px)");
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
    };
    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.footerInner}>
                    <div onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>
                        {phone ? <LogoIcon/> : <BigLogo/>}
                    </div>

                    <div className={classes.footerInfo}>
                        <div className={classes.footerInfoLinks}>
                            <a href={`tel:${contactsData?.phone}`}>
                                <Phone/>
                            </a>
                            <a href={`https://mailto:${contactsData?.email}`}>
                                <Email/>
                            </a>
                            <a href="#">
                                <Mark/>
                            </a>
                        </div>
                        <nav>
                        <ul className={classes.navs}>
                                <li onClick={() => scrollToSection("aboutUs")}>
                                    <Typography variant="body" weight={"weight-400"}>
                                        О компании
                                    </Typography>
                                </li>
                                <li onClick={() => scrollToSection("services")}>
                                    <Typography variant="body" weight={"weight-400"}>
                                        Услуги компании
                                    </Typography>
                                </li>
                                <li onClick={() => scrollToSection("projects")}>
                                    <Typography variant="body" weight={"weight-400"}>
                                        Наши проекты
                                    </Typography>
                                </li>
                                <li onClick={() => scrollToSection("contacts")}>
                                    <Typography variant="body" weight={"weight-400"}>
                                        Контакты
                                    </Typography>
                                </li>
                            </ul>
                        </nav>

                        <div className={classes.footerInfoTime}>
                            <span>
                                <Time/>
                                <Typography variant="body" weight={"weight-400"}>
                                        {contactsData?.work_time}
                                    </Typography>
                            </span>
                            <span>
                                <Call/>
                                <Typography variant="body" weight={"weight-400"}>
                                        {contactsData?.phone}
                                    </Typography>
                            </span>
                        </div>
                    </div>
                    <hr/>
                    <span>
                        <Typography variant="body" weight={"weight-400"}>
                                        © 2025 Газприборавтоматика. Все права защищены.
                                    </Typography>
                    </span>
                </div>
            </Container>
        </footer>
    );
};

