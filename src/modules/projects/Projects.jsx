import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import classes from "./Projects.module.scss";
import { Typography } from "ui/typography/Typography.jsx";
import { CustomCard } from "ui/customCard/CustomCard.jsx";
import UseFetchData from "utils/hooks/UseFetchData.js";
import parse from "html-react-parser";

export const Projects = ({id}) => {
    const {data, error}=UseFetchData("4_our-project/");
    if (error) return <p>Ошибка: {error}</p>;
    if (!data) return <p>Загрузка...</p>;



    return (
        <section className={classes.projects} id={id}>
            <div className={classes.project}>
                <Typography variant="h2">Наши проекты</Typography>
                <Swiper
                    modules={[Navigation, Keyboard, Mousewheel]}
                    spaceBetween={20}
                    slidesPerView={3.1}
                    loop={true}
                    keyboard={{ enabled: true }}
                    mousewheel={{ forceToAxis: true, sensitivity: 1 }}
                    freeMode={true}
                    className={classes.projectsInner}
                    breakpoints={{
                        320: {slidesPerView: 1.2},
                        500: {slidesPerView: 1.5},
                        710: { slidesPerView: 2.1 },
                        1050: { slidesPerView: 2.5 },
                        1300: { slidesPerView: 3.1 },
                    }}
                >
                    {data&& data?.map((project, index) => (
                        <SwiperSlide key={index}>
                            <CustomCard
                                variant="projects"
                                title={project.title}
                                desc={parse(project.description)}
                                image={project.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};