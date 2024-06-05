import { NavLink } from "react-router-dom";
import classes from "./StudentHeader.module.scss";
import { useEffect } from "react";
import authStore from "../../../stores/AuthStore";

const StudentHeader = () => {

  return (
    <header className={classes.container}>
      <img className={classes.logo} src="src/assets/Logo.png"></img>
      <nav>
        <ul className={classes.links}>
          <li>
            <NavLink to="student/available" className={classes.navLink}>
              {({ isActive }) => (
                <a className={isActive ? classes.linkActive : classes.link}>
                  Доступные работы
                </a>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="student/sended" className={classes.navLink}>
              {({ isActive }) => (
                <span className={isActive ? classes.linkActive : classes.link}>
                  Отправленные работы
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default StudentHeader;
