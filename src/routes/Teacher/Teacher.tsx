import { useEffect } from "react";
import authStore from "../../stores/AuthStore";
import classes from "./Teacher.module.scss";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import TeacherSendedTable from "../../components/Tables/TeacherSendedTable/TeacherSendedTable";
import teacherStore from "../../stores/TeacherStore";

const Teacher = () => {
    const { login } = authStore;
    const { loadSendedWorks, loadCourses, loadTasks } = teacherStore;

    useEffect(() => {
        login('Виктор Власов', '123').then(() => {
            loadSendedWorks();
            loadCourses();
            loadTasks();
        });
    })

    return (
        <TableWrapper title="Присланные работы">
            <TeacherSendedTable/>
        </TableWrapper>
    )
}

export default Teacher;
