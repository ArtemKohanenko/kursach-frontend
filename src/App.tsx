import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Characters from "./routes/Characters/Characters";
import NoMatch from "./routes/NoMatch/NoMatch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./routes/Login/Login";
import Student from "./routes/Student/Student";
import Teacher from "./routes/Teacher/Teacher";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Login/>,
        },
        {
          path: "/student",
          children: [
            { index: true, element: <Navigate to="/student/sended" /> },
            { path: "/student/sended", element: <Student/> },
          ],
        },
        {
          path: "/teacher",
          children: [
            { index: true, element: <Navigate to="/teacher/checking" /> },
            { path: "/teacher/checking", element: <Teacher/> },
          ],
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];

  const element = useRoutes(routes);

  return (
    <>
      <ToastContainer />
      {element}
    </>
  );
}

export default App;
