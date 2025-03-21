import classes from "./Hero.module.scss";
import { Container, Typography } from "ui/index";
import {UseHero} from "modules/hero/api/UseHero.js";
import {UseContacts} from "modules/contacts/api/UseContacts.js";


export const Hero = () => {
    const {data}=UseHero();
    const {contactsData}=UseContacts();
  return (
    <section className={classes.hero}>
        <Container>
            <div className={classes.heroInner}>
                <div className={classes.heroLeft}>
                    <Typography variant="h1">{data?.title}</Typography>
                    <div className={classes.heroImage}>
                        <img src={data?.image} alt="«Газприборавтоматика»"/>
                    </div>
                    <Typography variant="h4" weight="weight-500">{data?.description}</Typography>
                    <button>
                        <Typography variant="body">
                            <a href={`tel:${contactsData?.phone}`}>Связаться</a>
                        </Typography>
                    </button>
                </div>
                <div className={classes.heroRight}>
                    <img src={data?.image} alt="«Газприборавтоматика»" />
                </div>
            </div>
        </Container>
    </section>
  );
};
