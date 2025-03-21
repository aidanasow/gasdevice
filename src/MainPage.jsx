import { AboutUs, Header, Hero, WhyWe, Services, Contacts, Projects, Footer } from "./modules/index";
import classes from "./styles/MainPage.module.scss";

export const MainPage = () => {
    return (
        <div className={classes.wrapper}>
            <Header />
            <Hero />
            <WhyWe />
            <AboutUs id="aboutUs" />
            <Services id="services" />
            <Projects id="projects" />
            <Contacts id="contacts" />
            <Footer />
        </div>
    );
};
