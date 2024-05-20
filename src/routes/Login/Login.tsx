import LoginModal from "../../components/Modals/LoginModal/LoginModal";
import classes from "./Login.module.scss";

const Login = () => {

    return (
        <div className={classes.pageContainer}>
            <LoginModal/>
        </div>
    )
}

export default Login;