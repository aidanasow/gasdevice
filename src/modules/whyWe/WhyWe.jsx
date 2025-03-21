import {Container, CustomCard} from "ui/index.js";
import classes from "./WhyWe.module.scss";
import {UseHero} from "modules/hero/api/UseHero.js";
export const WhyWe = () => {
    const {benefits}=UseHero();
    return (
            <Container>
                <div className={classes.whyWeBlock}>
                    {
                        benefits && benefits?.map((benefit, index)=>(
                            <CustomCard variant={"whyWe"} icon={benefit.icon} desc={benefit.text} key={index} />
                        ))
                    }
                </div>
            </Container>

    );
};

