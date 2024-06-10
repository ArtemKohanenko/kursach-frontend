import MUIDataTable from "mui-datatables";
import TableRow from '@mui/material/TableRow/TableRow';
import TableCell from '@mui/material/TableCell/TableCell';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';
import { IoIosAddCircleOutline } from "react-icons/io";
import IconButton from '@mui/material/IconButton/IconButton';
import { useState } from "react";
import CreateTaskModal from "../../Modals/CreateTaskModal/CreateTaskModal";
import studentStore from "../../../stores/StudentStore";
import StudentAvailableSubTable from "./StudentAvailableTable/StudentAvailableSubtable";
import SendWorkModal from "../../Modals/SendWork/SendWorkModal";
import SendWorkWithSpecificTask from "../../Modals/SendWorkWithSpecificTask/SendWorkWithSpecificTask";

const StudentAvailableTable = () => {
  const { courses, tasks, getTasksByCourseId } = studentStore;  

  // Create Work
  const [showModal, setShowModal] = useState(false);
  const [modalTaskId, setModalTaskId] = useState<string>('');
  const closeModal = () => {
    setShowModal(false);
  }
  const openModal = (taskId: string) => {
    setModalTaskId(taskId);
    setShowModal(true);
  }

  const columnNames = ["КУРС", "ДИСЦИПЛИНА", "ПРЕПОДАВАТЕЛЬ", "КОЛИЧЕСТВО"];
  const columns: any = columnNames.map(colName => {
    return {
      name: colName,
      options: {
        customHeadRender: ({index, ...column}: any) => {
          return (
            <TableCell key={index} style={{ fontWeight: 'bold', color: '#6e6893' }}>
              {column.name}
            </TableCell>
          )
        }
      }
    }
  });

  const data = (courses.length>0 && tasks.length>0) ? courses.map(course => {
    const teachersString = course.teachers?.map(teacher => teacher.user?.name).toString();
    return [ course.name, course.subject, teachersString, getTasksByCourseId(course.id).length ]
  }) : []

  const options: any = {
    filterType: "dropdown",
    responsive: "scroll",
    selectableRows : false,
    expandableRows: true,
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    renderExpandableRow: (rowData: any, rowMeta: any) => {
      return (
        <TableRow>
          <TableCell style = {{width: '1000px', padding: '0'}} colSpan={6}>
            <StudentAvailableSubTable tasks={getTasksByCourseId(courses[rowMeta.rowIndex].id)} openCreateModal={openModal}/>
          </TableCell>
        </TableRow>
      );
    }
  };

  const mainTableTheme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            width: '1000px'
          }
        }
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            width: '1000px',
            borderBottom: '1px solid #d9d5ec'
          }
        }
      },
      MUIDataTableSelectCell: {
        styleOverrides: {
          fixedHeader: {
            backgroundColor: '#f4f2ff'
          }
        }
      },
      MUIDataTableHeadRow: {
        styleOverrides: {
          root: {
            backgroundColor: '#f4f2ff'
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
      <SendWorkWithSpecificTask active={showModal} onClose={closeModal} taskId={modalTaskId}/>
    </>
  )

}

export default observer(StudentAvailableTable);