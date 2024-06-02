import BigButton from '../../BigButton/BigButton';
import classes from './SendWorkModal.module.scss';

type SendWorkModalProps = {
  active: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const SendWorkModal = ({ active, onClose, onSubmit}: SendWorkModalProps) => {
    if (!active) {
        return null;
    }
    return (
        <div className={classes.wrapper} onClick={onClose}>
            <div className={classes.container} onClick={(event) => event.stopPropagation()}>
                <div className={classes.footer}>
                    <BigButton className={classes.button} onClick={onClose}>Отменить</BigButton>
                    <BigButton onClick={onSubmit}>Загрузить</BigButton>
                </div>
            </div>
        </div>
    )
}

export default SendWorkModal;