import { DataGrid } from '@mui/x-data-grid/DataGrid';
import classes from "./TeacherSendedTable.module.scss";
import teacherStore from '../../../stores/TeacherStore';


const columns = [
    { field: "task", headerName: "Task", flex: 1, headerClassName: classes.header,},
    { field: "subject", headerName: "Subject", flex: 1, headerClassName: classes.header },
    { field: "student", headerName: "Student", flex: 1, headerClassName: classes.header },
    { field: "status", headerName: "Status", flex: 1, headerClassName: classes.header },
    { field: "date", headerName: "Date", flex: 1, headerClassName: classes.header },
  ];

const TeacherSendedTable = () => {
    const { sendedWorks } = teacherStore;
    return (
        <DataGrid
            className={classes.table}
            rows={sendedWorks}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: { page: 0, pageSize: 5 },
                },
            }}
            pageSizeOptions={[5, 10]}
        />
    );
}

export default TeacherSendedTable;