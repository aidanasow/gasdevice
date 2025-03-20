import classes from "./RequestForm.module.scss";
import {Typography} from "ui/index.js";
export const RequestForm = () => {
    return (
        <div className={classes.form}>
            <form>
                <label htmlFor="name">
                    <Typography variant={"h4"}>Имя</Typography>
                </label>
                <input id="name" name="name" type="text" />

                <label htmlFor="email">
                    <Typography variant={"h4"}>Почта</Typography>
                </label>
                <input id="email" name="email" type="email" />

                <label htmlFor="message">
                    <Typography variant={"h4"}> Сообщение</Typography>
                </label>
                <textarea id="message" name="message" className={classes.message}/>

                <button type="submit">
                    <Typography>Отправить</Typography>
                </button>
            </form>
        </div>
    );
};
