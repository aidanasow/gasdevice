import {Container, CustomCard} from "ui/index.js";
import classes from "./WhyWe.module.scss";
import {useData} from "../../context/DataContext.jsx";
export const WhyWe = () => {
    const {heroBlockData}=useData();
    const benefits=heroBlockData?.benefits;
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

