import BigButton from '../../BigButton/BigButton';
import classes from './CreateTaskModal.module.scss';
import { MdOutlineUpload } from "react-icons/md";
import { useForm } from 'react-hook-form';
import teacherStore from '../../../stores/TeacherStore';

type CreateTaskModalProps = {
    courseId: string;
    active: boolean;
    onClose: () => void;
    onSubmit: () => void;
};

const CreateTaskModal = ({ courseId, active, onClose}: CreateTaskModalProps) => {

    const { getCourseById, createTask } = teacherStore;

    const { 
        register,
        formState: { isValid },
        handleSubmit,
        reset,
    } = useForm({mode: "onBlur"});

    const onSubmit = (data: {comment: string, name: string}) => {
        createTask({ ...data, courseId: courseId })
        reset();
    }

    if (!active) {
        return null;
    }

    const course = getCourseById(courseId);

    return (
        <div className={classes.wrapper} onClick={onClose}>
            <div className={classes.container} onClick={(event) => event.stopPropagation()}>
                <div className={classes.header}>
                    <MdOutlineUpload className={classes.image} />
                    <h2 className={classes.header_title}>Создать задание</h2>
                    <h3 className={classes.header_title}>для курса {course?.name}</h3>
                </div>

                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Название
                        <input {...register('name', { required: true })}/>
                    </label>
                    <label>
                        Комментарий
                        <input {...register("comment", { required: true })}/>
                    </label>
                    <div className={classes.sendbutton}>
                        <input type='submit' disabled={!isValid}></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTaskModal;
