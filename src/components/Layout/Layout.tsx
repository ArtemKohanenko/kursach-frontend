import { Outlet, useLocation, useNavigate } from "react-router-dom";
import StudentHeader from "../Headers/StudentHeader/StudentHeader";
import classes from "./Layout.module.scss";
import TeacherHeader from "../Headers/TeacherHeader/TeacherHeader";
import { useEffect } from "react";
import authStore from "../../stores/AuthStore";

const Layout = () => {
  const location = useLocation();
  const { login } = authStore;

  useEffect(() => {
    const page = location.pathname.split('/')[1]

    if (page == 'student') {
      login('Фашист', '123');
    }
    else if (page == 'teacher') {
      login('Виктор Власов', '123');
    }
  }, [])

  return (
    <div className={classes.wrapper}>
      {(() => {
        switch (location.pathname.split('/')[1]) {
          case "student": return <StudentHeader />;
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
