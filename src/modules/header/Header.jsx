import classes from "./Header.module.scss";
import { Container, Typography } from "ui/index";
import { LogoIcon } from "assets/icons/LogoIcon.jsx";
import {UseContacts} from "modules/contacts/api/UseContacts.js";
import {MiniLogo} from "assets/icons/MiniLogo.jsx";

export const Header = () => {
    const {contactsData}=UseContacts();
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header>
            <Container>
                <header className={classes.header}>
                    <div className={classes.deskLogo}>
                        <LogoIcon />
                    </div>
                    <div className={classes.miniLogo}>
                        <MiniLogo/>
                    </div>
                    <nav>
                        <ul className={classes.navs}>
                            <li onClick={() => scrollToSection("aboutUs")}>
                                <Typography variant="body">О компании</Typography>
                            </li>
                            <li onClick={() => scrollToSection("services")}>
                                <Typography variant="body">Услуги компании</Typography>
                            </li>
                            <li onClick={() => scrollToSection("projects")}>
                                <Typography variant="body">Наши проекты</Typography>
                            </li>
                            <li onClick={() => scrollToSection("contacts")}>
                                <Typography variant="body">Контакты</Typography>
                            </li>
                        </ul>
                    </nav>
                    <button>
                        <Typography variant="body">
                            <a href={`tel:${contactsData?.phone}`}>Связаться</a>
                        </Typography>
                    </button>
                </header>
            </Container>
        </header>
    );
};
