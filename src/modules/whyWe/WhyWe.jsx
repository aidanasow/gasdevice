import {Container, CustomCard} from "ui/index.js";
import {Good} from "assets/icons/Good.jsx";
import classes from "./WhyWe.module.scss";
export const WhyWe = () => {
    return (

            <Container>
                <div className={classes.whyWeBlock}>
                    <CustomCard variant={"whyWe"} icon={<Good/>} desc={"Точность и надежность. Современные решения для учета газа"} />
                    <CustomCard variant={"whyWe"} icon={<Good/>} desc={"Точность и надежность. Современные решения для учета газа"} />
                    <CustomCard variant={"whyWe"} icon={<Good/>} desc={"Точность и надежность. Современные решения для учета газа"} />
                    <CustomCard variant={"whyWe"} icon={<Good/>} desc={"Точность и надежность. Современные решения для учета газа"} />
                </div>
            </Container>

    );
};

