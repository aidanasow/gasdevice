import { AboutUs, Header, Hero, WhyWe, Services, Contacts, Projects, Footer } from "./modules/index";
import classes from "./styles/MainPage.module.scss";
import {Suspense} from "react";
import {Spinner} from "ui/index.js";
import "./styles/fonts/fonts.scss";
import {DataProvider} from "./context/DataContext.jsx";
export const MainPage = () => {
    return (
        <DataProvider>
            <div className={classes.wrapper}>
                <Header/>
                <Suspense fallback={<Spinner/>}>
                    <main>
                        <Hero/>
                        <WhyWe/>
                        <AboutUs id="aboutUs"/>
                        <Services id="services"/>
                        <Projects id="projects"/>
                        <Contacts id="contacts"/>
                    </main>
                </Suspense>
                <Footer/>
            </div>
        </DataProvider>

    );
};
