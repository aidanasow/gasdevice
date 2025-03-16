import { Header } from "./modules/index";
import classes from "./styles/MainPage.module.scss";

export const MainPage = () => {
  return (
    <div className={classes.wrapper}>
        <Header/>
    </div>
  );
};
