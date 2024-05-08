import { Outlet, useLocation, useNavigate } from "react-router-dom";
import StudentHeader from "../Headers/StudentHeader/StudentHeader";
import classes from "./Layout.module.scss";
import TeacherHeader from "../Headers/TeacherHeader/TeacherHeader";

const Layout = () => {
  const location = useLocation();

  return (
    <div className={classes.wrapper}>
      {(() => {
        switch (location.pathname.split('/')[1]) {
          case "student":  return <StudentHeader />;
          case "teacher": return <TeacherHeader />;
          default: return null;
        }
      })()}

      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
