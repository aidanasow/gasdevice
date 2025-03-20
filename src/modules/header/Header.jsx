import classes from "./Header.module.scss";
import {Container, Typography} from "ui/index";
import {LogoIcon} from "assets/icons/LogoIcon.jsx";

export const Header = () => {
    return (
        <Container>
            <header className={classes.header}>
                <div>
                    <LogoIcon/>
                </div>
                <nav>
                    <li className={classes.navs}>
                        <ul>
                            <Typography variant="body">
                                О компании
                            </Typography>
                        </ul>
                        <ul>
                            <Typography variant="body">
                                Услуги компании
                            </Typography>
                        </ul>
                        <ul>
                            <Typography variant="body">
                                Наши проекты
                            </Typography>
                        </ul>
                        <ul>
                            <Typography variant="body">
                                Контакты
                            </Typography>
                        </ul>
                    </li>
                </nav>
                <button>
                    <Typography variant="body">Связаться</Typography>
                </button>
            </header>
        </Container>

    );
};
