import  classes from "./AboutUs.module.scss";
import {Container, CustomCard, Typography} from "ui/index.js";
import UseFetchData from "utils/hooks/UseFetchData.js";
import parse from "html-react-parser";
export const AboutUs = ({id}) => {
    const {data, error}=UseFetchData("2_about-company/");

    if (error) return <p>Ошибка: {error}</p>;
    if (!data) return <p>Загрузка...</p>;

    return (
        <section className={classes.aboutUs} id={id}>
            <Container>
                <div>
                    <Typography variant={"h2"}> О компании</Typography>
                    <div className={classes.aboutUsInner}>
                        {
                            data&& data?.map((item, index)=>(
                                <div key={index}>
                                    <CustomCard
                                        variant={"aboutUs"}
                                        title={item.title}
                                        desc={parse(item.description)}/>
                                </div>

                            ))
                        } </div>
                </div>
            </Container>
        </section>
    );
};
