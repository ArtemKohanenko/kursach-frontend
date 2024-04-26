import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Characters from "./routes/Characters/Characters";
import NoMatch from "./routes/NoMatch/NoMatch";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Navigate to="checking" />,
        },
        {
          path: "/checking",
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
