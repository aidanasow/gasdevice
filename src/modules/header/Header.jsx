import classes from "./Header.module.scss";
import {Container} from "ui/index";

export const Header = () => {
  return (
        <Container>
          <header className={classes.header}>
              <nav>
          <li className={classes.navs}>
            <ul>О компании</ul>
            <ul>Услуги компании</ul>
            <ul>Наши проекты</ul>
            <ul>Контакты</ul>
          </li>
        </nav>
        <button>Связаться</button>
          </header>
        </Container>
  
  );
};
