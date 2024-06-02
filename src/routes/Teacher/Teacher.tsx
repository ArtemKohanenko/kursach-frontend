import { useEffect } from "react";
import authStore from "../../stores/AuthStore";
import classes from "./Teacher.module.scss";
import TeacherSendedTable from "../../components/Tables/TeacherSendedTable/TeacherSendedTable";
import TableWrapper from "../../components/TableWrapper/TableWrapper";

const Teacher = () => {
    const { login } = authStore;

    useEffect(() => {
        login('Фашист', '123');
    })

    return (
        <TableWrapper title="Отправленные работы">
            <TeacherSendedTable/>
        </TableWrapper>
    )
}

export default Teacher;