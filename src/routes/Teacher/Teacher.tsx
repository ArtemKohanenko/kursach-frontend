import { useEffect } from "react";
import authStore from "../../stores/AuthStore";
import classes from "./Teacher.module.scss";

const Teacher = () => {
    const { login } = authStore;

    useEffect(() => {
        login('Фашист', '123');
    })

    return (<>Вы преподаватель.</>)
}

export default Teacher;