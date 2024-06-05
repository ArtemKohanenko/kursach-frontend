import { useEffect } from "react";
import authStore from "../../stores/AuthStore";
import classes from "./Student.module.scss";
import StudentSendedTable from "../../components/Tables/StudentSendedTable/StudentSendedTable";
import TableWrapper from "../../components/TableWrapper/TableWrapper";

const Student = () => {
    const { login } = authStore;

    useEffect(() => {
        login('Фашист', '123');
    })
    
    return (
        <TableWrapper title="Отправленные работы">
            <StudentSendedTable/>
        </TableWrapper>
        
    )
}

export default Student;