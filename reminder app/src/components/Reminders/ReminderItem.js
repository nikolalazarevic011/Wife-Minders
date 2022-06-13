import React from 'react'
import classes from "./ReminderItem.module.css";

const ReminderItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
      </figure>
      {/* <a className="btn">View Fullscreen</a> */}
    </li>
  );
};

export default ReminderItem;
