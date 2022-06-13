import React from 'react'
import { Link } from 'react-router-dom';

import classes from './NoRemindersFound.module.css';

const NoRemindersFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>No reminders found!</p>
      <Link className='btn--flat' to='/new-reminder'>
        Add a Reminder
      </Link>
    </div>
  );
};

export default NoRemindersFound;
