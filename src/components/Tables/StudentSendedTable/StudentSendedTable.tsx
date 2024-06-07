import MUIDataTable from "mui-datatables";
import TableCell from '@mui/material/TableCell/TableCell';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import classes from './StudentSendedTable.module.scss';
import SendWorkModal from '../../Modals/SendWork/SendWorkModal';
import { useState } from 'react';
import studentStore from '../../../stores/StudentStore';
import BigButton from "../../BigButton/BigButton";
import { observer } from "mobx-react-lite";

// eslint-disable-next-line react-refresh/only-export-components
const StudentSendedTable = () => {
    const { sendedWorks , tasks } = studentStore;
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    }

    const openModal = () => {
        setShowModal(true);
    }

    const columnNames = ["РАБОТА", "ДИСЦИПЛИНА", "ПРЕПОДАВАТЕЛЬ", "СТАТУС", "ДАТА"];


    const CustomHeaderButton = () => {
        return (
            <div className={classes.add_button}>
                <BigButton buttonClassName={classes.button} onClick={openModal}>Добавить</BigButton>
            </div>
        );
    }; 

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const columns: any = columnNames.map(colName => {
        return {
            name: colName,
            options: {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                customHeadRender: ({ index, ...column }: any) => {
                    return (
                        <TableCell key={index} style={{ fontWeight: 'bold', color: '#6e6893' }}>
                            {column.name}
                        </TableCell>
                    )
                }
            }
        }
    });
    
    const data = sendedWorks.map(sentWork => {
        const teachersString = sentWork.task.course.teachers.map(teacher => teacher.user?.name).toString();
        return [sentWork.task.name, sentWork.task.course.subject, teachersString, sentWork.status, sentWork.data]
    })
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const options: any = {
        filterType: "dropdown",
        responsive: "scroll",
        selectableRows : false,
        expandableRows: false,
        download: false,
        print: false,
        viewColumns: false,
        filter: false,
        customToolbar: () => <CustomHeaderButton/>
    };

    const mainTableTheme = createTheme({
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        width: '1000px',
                    }
                }
            },
            MuiTableRow: {
                styleOverrides: {
                    root: {
                        width: '1000px',
                        borderBottom: '1px solid #d9d5ec',
                    }
                }
            },
            MUIDataTableSelectCell: {
                styleOverrides: {
                    fixedHeader: {
                        backgroundColor: '#f4f2ff',
                    }
                }
            },
            MUIDataTableToolbar: {
                styleOverrides: {
                    actions: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'right',
                        gap: '20px',
                    }
                }
            },
            MUIDataTableHeadRow: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#fff',
                    }
                }
            }
        }
    })


    return (
        <>
            <ThemeProvider theme={mainTableTheme}>
                <MUIDataTable
                    title={""}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </ThemeProvider>
            <SendWorkModal active={showModal} onClose={closeModal}></SendWorkModal>
        </>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default observer(StudentSendedTable);
