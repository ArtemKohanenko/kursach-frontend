import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.container}>
      <img className={classes.logo} src="src/assets/Logo.png"></img>
      <nav>
        <ul className={classes.links}>
          <li>
            <NavLink to="characters" className={classes.navLink}>
              {({ isActive }) => (
                <a className={isActive ? classes.linkActive : classes.link}>
                  Управление работами
                </a>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="comics" className={classes.navLink}>
              {({ isActive }) => (
                <span className={isActive ? classes.linkActive : classes.link}>
                  Проверка работ
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
