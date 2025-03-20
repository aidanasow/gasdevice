import classes from "./Footer.module.scss";
import {Container, Typography} from "ui/index.js";
import {BigLogo} from "assets/icons/BigLogo.jsx";
import {Phone, Email, Mark} from "assets/index.js";
import {Time} from "assets/icons/Time.jsx";
import {Call} from "assets/icons/Call.jsx";

export const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.footerInner}>
                    <BigLogo/>
                    <div className={classes.footerInfo}>
                        <div className={classes.footerInfoLinks}>
                            <a href="#">
                                <Phone/>
                            </a>
                            <a href="#">
                                <Email/>
                            </a>
                            <a href="#">
                                <Mark/>
                            </a>
                        </div>
                        <nav>
                            <li className={classes.navs}>
                                <ul>
                                    <Typography variant="body" weight={"weight-400"}>
                                        О компании
                                    </Typography>
                                </ul>
                                <ul>
                                    <Typography variant="body" weight={"weight-400"}>
                                        Услуги компании
                                    </Typography>
                                </ul>
                                <ul>
                                    <Typography variant="body" weight={"weight-400"}>
                                        Наши проекты
                                    </Typography>
                                </ul>
                                <ul>
                                    <Typography variant="body" weight={"weight-400"}>
                                        Контакты
                                    </Typography>
                                </ul>
                            </li>
                        </nav>

                        <div className={classes.footerInfoTime}>
                            <span>
                                <Time/>
                                <Typography variant="body" weight={"weight-400"}>
                                        Пн-Пт с 8:00 до 18:00
                                    </Typography>
                            </span>
                            <span>
                                <Call/>
                                <Typography variant="body" weight={"weight-400"}>
                                        +996 703 11 22 33
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

