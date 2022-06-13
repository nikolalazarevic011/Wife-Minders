import React from 'react'
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import UserProfileButton from "./UserProfileButton";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>WifeMinders</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/reminders" activeClassName={classes.active}>
              All Reminders
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-reminder" activeClassName={classes.active}>
              Add Reminder
            </NavLink>
          </li>
          <li>
            <NavLink to="/user-profile" activeClassName={classes.active}>
              <UserProfileButton />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
//  <div className={classes['main-image']}>  mora ovako jer ne moze '.' kada ima "-"

export default Header;
