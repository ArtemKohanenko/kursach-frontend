import { useEffect } from "react";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import TeacherManagementTable from "../../components/Tables/TeacherManagementTable/TeacherManagementTable";
import coursesStore from "../../stores/TeacherStore";

const TeacherTasksManagement = () => {
    const { loadCourses, loadTasks, loadGroups } = coursesStore;

    useEffect(() => {
        loadCourses();
        loadTasks();
    })

    return (
        <TableWrapper title="Управление работами">
            <TeacherManagementTable/>
        </TableWrapper>
    )
}

export default TeacherTasksManagement;