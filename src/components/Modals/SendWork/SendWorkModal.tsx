import classes from './SendWorkModal.module.scss';
import { MdOutlineUpload } from "react-icons/md";
import { useForm } from 'react-hook-form';
import studentStore from '../../../stores/StudentStore';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

type SendWorkModalProps = {
  active: boolean;
  onClose: () => void;
};

const SendWorkModal = ({ active, onClose}: SendWorkModalProps) => {

    if (!active) {
        return null;
    }

    const { sendWork, loadTasks, tasks } = studentStore;

    useEffect(() => {
        loadTasks();
    }, [])

    const { 
        register,
        formState: { isValid },
        handleSubmit,
        reset,
    } = useForm({mode: "onBlur"});

    const onSubmit = (data: {comment: string, data: string, taskId: string}) => {
        sendWork(data);
        reset();
        onClose();
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
                        Задание
                        <select {...register("taskId", { required: true })}>
                            {
                                tasks.map(task => (
                                    <option value={task.id}>{task.name}</option>
                                ))
                            }
                        </select>
                    </label>
                    <label>
                        Ссылки на материалы
                        <textarea {...register("data")} />
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
