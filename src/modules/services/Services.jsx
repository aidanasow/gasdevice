import classes from "./Services.module.scss";
import {Container} from "ui/container/Container.jsx";
import {Typography} from "ui/typography/Typography.jsx";
import {CustomCard} from "ui/customCard/CustomCard.jsx";
import UseFetchData from "utils/hooks/UseFetchData.js";
import parse from "html-react-parser";
export const Services = ({id}) => {
    const {data, error}=UseFetchData("3_service/");

    if (error) return <p>Ошибка: {error}</p>;
    return (
        <Container>
            <div className={classes.services} id={id}>
                <Typography variant={"h2"}>Услуги компании</Typography>
                <div className={classes.servicesInner}>
                    {
                        data && data?.map((item, index)=>(
                            <div key={index}>
                                <CustomCard variant={"services"}
                                            icon={item.icon}
                                            desc={parse(item.description)}
                                            title={item.title}/>
                            </div>

                        ))
                    }

                </div>
            </div>
        </Container>
    );
};
