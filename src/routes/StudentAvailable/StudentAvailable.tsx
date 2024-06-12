import { useEffect } from "react";
import authStore from "../../stores/AuthStore";
import classes from "./Student.module.scss";
import StudentSendedTable from "../../components/Tables/StudentSendedTable/StudentSendedTable";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import studentStore from "../../stores/StudentStore";
import StudentAvailableTable from "../../components/Tables/StudentAvailableTable/StudentAvailableTable";
import TeacherManagementTable from "../../components/Tables/TeacherManagementTable/TeacherManagementTable";

const StudentAvailable = () => {
    const { loadWorks, loadTasks, loadCourses } = studentStore;

    useEffect(() => {
        loadCourses();
        loadWorks();
        loadTasks();
    })
    
    return (
        <TableWrapper title="Доступные задания">
            {/* <TeacherManagementTable/> */}
            <StudentAvailableTable/>
        </TableWrapper>
        
    )
}

export default StudentAvailable;