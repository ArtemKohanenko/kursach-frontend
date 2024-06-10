import classes from './SendWorkWithSpecificTask.module.scss';
import { MdOutlineUpload } from "react-icons/md";
import { useForm } from 'react-hook-form';
import studentStore from '../../../stores/StudentStore';
import { useEffect } from 'react';

type SendWorkWithSpecificTaskProps = {
  active: boolean;
  taskId: string;
  onClose: () => void;
};

const SendWorkWithSpecificTask = ({ active, taskId, onClose}: SendWorkWithSpecificTaskProps) => {

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

    const onSubmit = (data: {comment: string, data: string}) => {
        sendWork({ ...data, taskId});
        reset();
        onClose();
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

export default SendWorkWithSpecificTask;
