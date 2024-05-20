import { collapseClasses } from "@mui/material";
import classes from "./TableWrapper.module.scss";

const TableWrapper = (props: {children: React.ReactNode, title: string}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <span className={classes.title}>{props.title}</span>
                {props.children}
            </div>
        </div>
    )
}

export default TableWrapper;