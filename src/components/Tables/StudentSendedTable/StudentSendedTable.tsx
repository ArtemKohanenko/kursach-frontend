import { DataGrid } from '@mui/x-data-grid/DataGrid';
import TableHeader from '../../TableHeader/TableHeader';
import classes from './StudentSendedTable.module.scss';
import sendedSorksStore from '../../../stores/SendedWorksStore';
import SendWorkModal from '../../Modals/SendWork/SendWorkModal';
import { useState } from 'react';


const columns = [
    { field: "task", headerName: "Task", flex: 1, headerClassName: classes.header,},
    { field: "subject", headerName: "Subject", flex: 1, headerClassName: classes.header },
    { field: "teacher", headerName: "Teacher", flex: 1, headerClassName: classes.header },
    { field: "status", headerName: "Status", flex: 1, headerClassName: classes.header },
    { field: "date", headerName: "Date", flex: 1, headerClassName: classes.header },
  ];

const StudentSendedTable = () => {
    const { sendedWorks } = sendedSorksStore;
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    }

    const openModal = () => {
        setShowModal(true);
    }

    const submit = () => {
        alert("недоступно");
    }

    return (
        <>
            <TableHeader onOpen={openModal} />
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
            <SendWorkModal active={showModal} onClose={closeModal} onSubmit={submit}></SendWorkModal>
        </>
    );
}

export default StudentSendedTable;