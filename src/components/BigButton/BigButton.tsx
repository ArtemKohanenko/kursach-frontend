import classes from "./BigButton.module.scss";

const BigButton = (props: {children: React.ReactNode, onClick: ()=>void}) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.text}>{props.children}</span>
        </button>
    )
}

export default BigButton;