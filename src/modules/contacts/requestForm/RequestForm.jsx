import { useState } from "react";
import { useForm } from "react-hook-form";
import {ToastContainer, toast, Bounce} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./RequestForm.module.scss";
import { Typography } from "ui/index.js";
import {postApi} from "utils/axios/axios.js";

export const RequestForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            await postApi.post("https://gasdevice.kg/api/v1/6_application/", data);
            toast.success("Ваша заявка успешно отправлена", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            reset();
        } catch (error) {
            toast.error(`Ошибка: ${error.response?.data?.message || "Что-то пошло не так"}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={classes.form}>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="light"
                transition={Bounce}
                rtl={true}
                closeButton={false}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">
                    <Typography variant={"h4"}>Имя</Typography>
                </label>
                <input
                    id="name"
                    type="text"
                    {...register("name", { required: "Имя обязательно" })}
                />
                {errors.name && <span  style={{color: "red"}}>{errors.name.message}</span>}

                <label htmlFor="email">
                    <Typography variant={"h4"}>Почта</Typography>
                </label>
                <input
                    id="email"
                    type="email"
                    {...register("email", {
                        required: "Почта обязательна",
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                            message: "Неверный формат почты"
                        }
                    })}
                />
                {errors.email && <span  style={{color: "red"}}>{errors.email.message}</span>}

                <label htmlFor="message">
                    <Typography variant={"h4"}>Сообщение</Typography>
                </label>
                <textarea
                    id="message"
                    {...register("message", { required: "Сообщение обязательно" })}
                    className={classes.message}
                />
                {errors.message && <span style={{color: "red"}}>{errors.message.message}</span>}

                <button type="submit" disabled={isSubmitting}>
                    <Typography>Отправить</Typography>
                </button>
            </form>
        </div>
    );
};
