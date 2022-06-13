import React from 'react'
import UserIcon from "./UserIcon";
import classes from "./UserProfileButton.module.css";

const UserProfileButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <UserIcon />
      </span>
      <span>Nikola Lazarevic</span>
    </button>
  );
};

export default UserProfileButton;
