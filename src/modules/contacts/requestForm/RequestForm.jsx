import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import classes from "./RequestForm.module.scss";
import { Typography } from "ui/index.js";

export const RequestForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await axios.post("https://gasdevice.kg/api/v1/6_application/", data);
            setResponseMessage("Заявка успешно отправлена!");
        } catch (error) {
            setResponseMessage("Ошибка при отправке заявки.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={classes.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                    <Typography variant={"h4"}>Имя</Typography>
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    {...register("name", { required: "Имя обязательно" })}
                />
                {errors.name && <span>{errors.name.message}</span>}

                <label htmlFor="email">
                    <Typography variant={"h4"}>Почта</Typography>
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    {...register("email", {
                        required: "Почта обязательна",
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                            message: "Неверный формат почты"
                        }
                    })}
                />
                {errors.email && <span>{errors.email.message}</span>}

                <label htmlFor="message">
                    <Typography variant={"h4"}>Сообщение</Typography>
                </label>
                <textarea
                    id="message"
                    name="message"
                    {...register("message", { required: "Сообщение обязательно" })}
                    className={classes.message}
                />
                {errors.message && <span>{errors.message.message}</span>}

                <button type="submit" disabled={isSubmitting}>
                    <Typography>Отправить</Typography>
                </button>
            </form>

            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};
