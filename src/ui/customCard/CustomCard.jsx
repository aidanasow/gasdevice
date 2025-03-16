import classes from "./CustomCard.module.scss";
import { Typography } from "./../typography/Typography";

export const CustomCard =({title, desc, image, imageAlt})=> {
  return (
    <div className={classes.customCard}>
      <div className={classes.customCardImg}>
        <img src={image} alt={imageAlt} />
      </div>
      <div className={classes.customCardText}>
        <Typography>{title}</Typography>
        <Typography>{desc}</Typography>
      </div>
    </div>
  );
};