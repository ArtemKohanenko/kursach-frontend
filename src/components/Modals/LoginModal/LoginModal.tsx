import { useNavigate } from "react-router-dom";
import BigButton from "../../BigButton/BigButton";
import classes from "./LoginModal.module.scss";

const LoginModal = () => {
    const navigate = useNavigate();
    
    const asStudentHandler = () => {
        navigate('student');
    }
    const asTeacherHandler = () => {
        navigate('teacher');
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <span className={classes.text}>Вход</span>
                <div className={classes.buttonContainer}>
                    <BigButton onClick={asStudentHandler}>Как студент</BigButton>
                    <BigButton onClick={asTeacherHandler}>Как преподаватель</BigButton>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;