import  classes from "./AboutUs.module.scss";
import {Container, CustomCard, Typography} from "ui/index.js";

export const AboutUs = () => {
    return (
        <section className={classes.aboutUs}>
            <Container>
                <div>
                    <Typography variant={"h2"}> О компании</Typography>
                    <div className={classes.aboutUsInner}>
                        <CustomCard variant={"aboutUs"} title={"Наша история"} desc={"Компания «Газприборавтоматика» была создана с целью обеспечения высококачественного обслуживания, эффективной эксплуатации и надежного функционирования газоизмерительных систем и оборудования."}/>
                        <CustomCard variant={"aboutUs"} title={"Наша история"} desc={"Компания «Газприборавтоматика» была создана с целью обеспечения высококачественного обслуживания, эффективной эксплуатации и надежного функционирования газоизмерительных систем и оборудования."}/>
                        <CustomCard variant={"aboutUs"} title={"Наша история"} desc={"Компания «Газприборавтоматика» была создана с целью обеспечения высококачественного обслуживания, эффективной эксплуатации и надежного функционирования газоизмерительных систем и оборудования."}/>
                    </div>
                </div>
            </Container>
        </section>
    );
};
