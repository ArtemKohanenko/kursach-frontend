import classes from "./Filter.module.scss";
import { FaFilter } from "react-icons/fa6";

const Filter = () => {
    return (
        <div className={classes.wrapper}>
            <FaFilter/>
            <span className={classes.text}>Фильтр</span>
        </div>
    )
}

export default Filter;
