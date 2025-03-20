import classes from "./CustomCard.module.scss";
import { Typography } from "./../typography/Typography";

export const CustomCard = ({ title, desc, image, imageAlt, icon, variant, key }) => {
    return (
        <div className={`${classes.customCard} ${classes[variant]}`} key={key}>

            { icon && (
                <div >{icon}</div>
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
                    variant!=="whyWe"? <Typography variant={"smallBody"}>{desc}</Typography>:
                        <Typography>{desc}</Typography>
                }

            </div>
        </div>
    );
};
