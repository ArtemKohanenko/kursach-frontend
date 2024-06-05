import classes from "./BigButton.module.scss";

const BigButton = (props: { children: React.ReactNode, onClick: () => void, buttonClassName?: string, spanClassName?: string }) => {
    return (
        <button className={`${props.buttonClassName} ${classes.button}`} onClick={props.onClick}>
            <span className={`${props.spanClassName} ${classes.text}`} >{props.children}</span>
        </button>
    )
}

export default BigButton;