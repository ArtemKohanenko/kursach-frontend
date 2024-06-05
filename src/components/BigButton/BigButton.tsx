import classes from "./BigButton.module.scss";

const BigButton = (props: { children: React.ReactNode, onClick: () => void, buttonClassName?: string, spanClassName?: string }) => {
    return (
        <button className={`${classes.button} ${props.buttonClassName}`} onClick={props.onClick}>
            <span className={`${classes.text} ${props.spanClassName}`} >{props.children}</span>
        </button>
    )
}

export default BigButton;