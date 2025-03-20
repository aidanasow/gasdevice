import classes from "./Hero.module.scss";
import { Container, Typography } from "ui/index";
import image from "assets/images/image.png";

export const Hero = () => {
  return (
    <section className={classes.hero}>
        <Container>
            <div className={classes.heroInner}>
                <div className={classes.heroLeft}>
                    <Typography variant="h1">Надежные решения для учета и автоматизации газа</Typography>
                    <Typography variant="h4" weight="weight-500">«Газприборавтоматика» – это профессиональные услуги по монтажу, настройке и обслуживанию газоизмерительного оборудования, внедрению АСУГ и ремонту электротехнических систем. Обеспечиваем точность, безопасность и эффективность работы газораспределительных систем.</Typography>
                    <button>
                        <Typography variant="body">Связаться</Typography>
                    </button>
                </div>
                <div className={classes.heroRight}>
                    <img src={image} alt="«Газприборавтоматика»" />
                </div>
            </div>
        </Container>
    </section>
  );
};
