import MUIDataTable from "mui-datatables";
import TableCell from '@mui/material/TableCell/TableCell';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ITask from '../../../../types/task';
import { observer } from "mobx-react-lite";


const StudentAvailableSubtable = (props: {tasks: ITask[], openCreateModal: (taskId: string) => void}) => {

  const tasks = props.tasks;
  const openCreateModal = props.openCreateModal;

  const columnNames = [ "Задание", "Комментарии" ];
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
  })
  
  const data = tasks.map(task => [ task.name, task.comment ] )


  const options: any = {
    responsive: "scroll",
    selectableRows : false,
    download: false,
    print: false,
    viewColumns: false,
    filter: false,
    onRowClick: (rowData: any, rowMeta: any) => {
      openCreateModal(tasks[rowMeta.dataIndex].id);
    },
  };

  const subtableTheme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            width: '1000px',
            borderRadius: 0,
            boxShadow: 'none'
          }
        }
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid #d9d5ec'
          }
        }
      },
      MUIDataTableHeadRow: {
        styleOverrides: {
          root: {
            backgroundColor: '#f2f0f9'
          }
        }
      },
      MUIDataTableHeadCell: {
        styleOverrides: {
          root: {
            backgroundColor: '#f2f0f9'
          }
        }
      },
      MUIDataTableBodyRow: {
        styleOverrides: {
          root: {
            backgroundColor: '#f4f2ff'
          }
        }
      },
      MuiTableFooter: {
        styleOverrides: {
          root: {
            display: 'none'
          }
        }
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            display: 'none'
          }
        }
      }
    }
  })


  return (
    <>
    <ThemeProvider theme={subtableTheme}>
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

export default observer(StudentAvailableSubtable);