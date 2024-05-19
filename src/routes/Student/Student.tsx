import { useEffect } from "react";
import authStore from "../../stores/AuthStore";
import classes from "./Student.module.scss";

const Student = () => {
    const { login } = authStore;

    useEffect(() => {
        login('Виктор Власов', '123');
    })
    
    return (<>Вы студент.</>)
}

export default Student;