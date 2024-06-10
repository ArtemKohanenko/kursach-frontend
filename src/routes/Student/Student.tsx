import { useEffect } from "react";
import authStore from "../../stores/AuthStore";
import classes from "./Student.module.scss";
import StudentSendedTable from "../../components/Tables/StudentSendedTable/StudentSendedTable";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import studentStore from "../../stores/StudentStore";

const Student = () => {
    const { login, profile } = authStore;
    const { loadWorks, loadTasks, loadCourses } = studentStore;

    useEffect(() => {
        login('Фашист', '123').then(() => {
            loadCourses();
            loadWorks();
            loadTasks();
        });
    })
    
    return (
        <TableWrapper title="Отправленные работы">
            <StudentSendedTable/>
        </TableWrapper>
        
    )
}

export default Student;