import classes from "./CustomCard.module.scss";
import { Typography } from "./../typography/Typography";

export const CustomCard = ({ title, desc, image, imageAlt, icon, variant }) => {
    return (
        <div className={`${classes.customCard} ${classes[variant]}`}>

            { icon && (
                <div className={classes.customCardIcon}>
                    <img src={icon} alt="icon"/>
                </div>
            )}

            {variant==="projects" && (
                <div className={classes.customCardImg}>
                    <img src={image} alt={imageAlt} />
                </div>
            )}

            <div className={classes.customCardText}>

                {variant === "aboutUs" ? <Typography variant={"h4"}>{title}</Typography>:
                <Typography weight={"weight-700"}>{title}</Typography>
                }
                {
                    variant!=="whyWe"? <div>{desc}</div>:
                        <Typography>{desc}</Typography>
                }

            </div>
        </div>
    );
};
