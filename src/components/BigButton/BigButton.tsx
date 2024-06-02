import classes from "./BigButton.module.scss";

const BigButton = (props: { children: React.ReactNode, onClick: () => void, className?: string }) => {
    return (
        <button className={`${props.className} ${classes.button}`} onClick={props.onClick}>
            <span className={classes.text}>{props.children}</span>
        </button>
    )
}

export default BigButton;