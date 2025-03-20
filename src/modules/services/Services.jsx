import classes from "./Services.module.scss";
import {Container} from "ui/container/Container.jsx";
import {Typography} from "ui/typography/Typography.jsx";
import {CustomCard} from "ui/customCard/CustomCard.jsx";
import {GasdetectorIcon} from "assets/icons/GasdetectorIcon.jsx";

export const Services = () => {
    return (
        <Container>
            <div className={classes.services}>
                <Typography variant={"h2"}>Услуги компании</Typography>
                <div className={classes.servicesInner}>
                    <CustomCard variant={"services"}
                                icon={<GasdetectorIcon/>}
                                desc={"Установка счетчиков газа, датчиков давления, расходомеров и другого оборудования."}
                                title={"Монтаж и настройка "}/>
                    <CustomCard variant={"services"}
                                icon={<GasdetectorIcon/>}
                                desc={"Установка счетчиков газа, датчиков давления, расходомеров и другого оборудования."}
                                title={"Монтаж и настройка "}/>
                    <CustomCard variant={"services"}
                                icon={<GasdetectorIcon/>}
                                desc={"Установка счетчиков газа, датчиков давления, расходомеров и другого оборудования."}
                                title={"Монтаж и настройка "}/>
                    <CustomCard variant={"services"}
                                icon={<GasdetectorIcon/>}
                                desc={"Установка счетчиков газа, датчиков давления, расходомеров и другого оборудования."}
                                title={"Монтаж и настройка "}/>
                    <CustomCard variant={"services"}
                                icon={<GasdetectorIcon/>}
                                desc={"Установка счетчиков газа, датчиков давления, расходомеров и другого оборудования."}
                                title={"Монтаж и настройка "}/>
                </div>
            </div>
        </Container>
    );
};
