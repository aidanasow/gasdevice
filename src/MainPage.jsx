import { AboutUs, Header, Hero, WhyWe, Services, Contacts, Projects, Footer } from "./modules/index";
import classes from "./styles/MainPage.module.scss";
import {Suspense} from "react";
import {Loader} from "ui/loader/Loader.jsx";

export const MainPage = () => {
    return (
        <div className={classes.wrapper}>
            <Header />
            <Suspense fallback={<Loader/>}>
                <Hero />
                <WhyWe />
                <AboutUs id="aboutUs" />
                <Services id="services" />
                <Projects id="projects" />
                <Contacts id="contacts" />
            </Suspense>
            <Footer />
        </div>
    );
};
