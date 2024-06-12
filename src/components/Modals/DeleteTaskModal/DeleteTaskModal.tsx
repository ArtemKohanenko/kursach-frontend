import classes from './DeleteTaskModal.module.scss';
import { MdOutlineDelete } from "react-icons/md";
import teacherStore from '../../../stores/TeacherStore';
import BigButton from '../../BigButton/BigButton';

type DeleteTaskModalProps = {
    taskId: string;
    active: boolean;
    onClose: () => void;
    onSubmit?: () => void;
};

const DeleteTaskModal = ({ taskId, active, onClose}: DeleteTaskModalProps) => {

    if (!active) {
        return null;
    }

    const { getTaskById, getCourseById, deleteTask } = teacherStore;

    const onSubmit = () => {
        deleteTask(taskId);
        onClose();
    }

    const task = getTaskById(taskId);
    const course = task ? getCourseById(task?.courseId) : null;

    return (
        <div className={classes.wrapper} onClick={onClose}>
            <div className={classes.container} onClick={(event) => event.stopPropagation()}>
                <div className={classes.header}>
                    <MdOutlineDelete className={classes.image} />
                    <h2 className={classes.header_title}>Удалить задание "{task?.name}"</h2>
                    <h3 className={classes.header_title}>из курса "{course?.name}"</h3>
                </div>
                <div className={classes.buttonsContainer}>
                    <BigButton buttonClassName={classes.ok} onClick={onSubmit}>Удалить</BigButton>
                    <BigButton buttonClassName={classes.no} onClick={onClose}>Отмена</BigButton>
                </div>
            </div>
        </div>
    )
}

export default DeleteTaskModal;
