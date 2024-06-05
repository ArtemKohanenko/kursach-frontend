import { useEffect } from "react";
import TableWrapper from "../../components/TableWrapper/TableWrapper";
import TeacherManagementTable from "../../components/Tables/TeacherManagementTable/TeacherManagementTable";
import coursesStore from "../../stores/TeacherStore";

const TeacherTasksManagement = () => {
    const { loadCourses } = coursesStore;

    useEffect(() => {
        loadCourses();
    })

    return (
        <TableWrapper title="Управление работами">
            <TeacherManagementTable/>
        </TableWrapper>
    )
}

export default TeacherTasksManagement;