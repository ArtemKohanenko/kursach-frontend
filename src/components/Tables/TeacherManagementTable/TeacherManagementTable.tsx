import MUIDataTable from "mui-datatables";
import TableRow from '@mui/material/TableRow/TableRow';
import TableCell from '@mui/material/TableCell/TableCell';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TaskSubtable from './TaskSubtable/TeacherManagementTable';
import { observer } from 'mobx-react-lite';
import { IoIosAddCircleOutline } from "react-icons/io";
import IconButton from '@mui/material/IconButton/IconButton';
import teacherStore from '../../../stores/TeacherStore';
import { useEffect } from "react";

const TeacherManagementTable = () => {
  const { courses } = teacherStore;

  const columnNames = ["КУРС", "ДИСЦИПЛИНА", "ГРУППЫ", "КОЛИЧЕСТВО"];
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
  columns.push({
    name: "ДОБАВИТЬ",
    options: {
      customHeadRender: ({index, ...column}: any) => {
        return (
          <TableCell key={index} style={{ fontWeight: 'bold', color: '#6e6893' }}>
            {column.name}
          </TableCell>
        )
      },
      customBodyRender: () => (
        <IconButton aria-label="delete">
          <IoIosAddCircleOutline />
        </IconButton>
      ),
    }
  })

  const data = courses.map(course => {
    const groupsString = course.groups?.map(group => group.name).sort().toString();
    return [ course.name, course.subject, groupsString, course.tasks?.length ]
  })
  
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
            <TaskSubtable tasks={courses[rowMeta.rowIndex].tasks}/>
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
    </>
  )

}

export default observer(TeacherManagementTable);