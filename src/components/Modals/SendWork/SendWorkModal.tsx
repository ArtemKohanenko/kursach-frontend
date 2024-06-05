import BigButton from '../../BigButton/BigButton';
import classes from './SendWorkModal.module.scss';
import { MdOutlineUpload } from "react-icons/md";
import { useForm } from 'react-hook-form';

type SendWorkModalProps = {
  active: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const SendWorkModal = ({ active, onClose}: SendWorkModalProps) => {
    const { 
        register,
        formState: { isValid },
        handleSubmit,
        reset,
    } = useForm({mode: "onBlur"});

    const onSubmit = (data: unknown) => {
        alert(JSON.stringify(data))
        reset();
    }

    if (!active) {
        return null;
    }

    return (
        <div className={classes.wrapper} onClick={onClose}>
            <div className={classes.container} onClick={(event) => event.stopPropagation()}>
                <div className={classes.header}>
                    <MdOutlineUpload className={classes.image} />
                    <h2 className={classes.header_title}>Загрузить работу</h2>
                </div>

                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Название задания
                        <input {...register('exercise', { required: true })} placeholder='ООАиП'/>
                    </label>
                    <label>
                        Дисциплина
                        <select {...register("subject", { required: true })}>
                            <option value="ooaip">ООАиП</option>
                            <option value="practicum">Практикум</option>
                        </select>
                    </label>
                    <label>
                        Ссылка на задание
                        <input type="url" placeholder="https://github.com/" {...register("link", {required: true})} />
                    </label>
                    <label>
                        Комментарий к работе
                        <textarea {...register("comment")} />
                    </label>
                    <div className={classes.sendbutton}>
                        <input type='submit' disabled={!isValid}></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SendWorkModal;
