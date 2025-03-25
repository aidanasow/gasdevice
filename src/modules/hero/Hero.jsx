import classes from "./Hero.module.scss";
import { Container, Typography } from "ui/index";
import {useData} from "../../context/DataContext.jsx";


export const Hero = () => {
    const {contactsData, heroBlockData}=useData();

  return (
    <section className={classes.hero}>
        <Container>
            <div className={classes.heroInner}>
                <div className={classes.heroLeft}>
                    <Typography variant="h1">{heroBlockData?.title}</Typography>
                    <div className={classes.heroImage}>
                        <img src={heroBlockData?.image} alt="«Газприборавтоматика»" loading={"lazy"}/>
                    </div>
                    <Typography variant="h4" weight="weight-500">{heroBlockData?.description}</Typography>
                    <button>
                        <Typography variant="body">
                            <a href={`tel:${contactsData?.phone}`}>Связаться</a>
                        </Typography>
                    </button>
                </div>
                <div className={classes.heroRight}>
                    <img src={heroBlockData?.image} alt="«Газприборавтоматика»" />
                </div>
            </div>
        </Container>
    </section>
  );
};
