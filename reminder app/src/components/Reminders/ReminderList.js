import React from 'react'
import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ReminderItem from './ReminderItem'
import classes from './ReminderList.module.css';

const sortReminders = (reminders, ascending) => {
  return reminders.sort((reminderA, reminderB) => {
    if (ascending) {
      return reminderA.id > reminderB.id ? 1 : -1;
    } else {
      return reminderA.id < reminderB.id ? 1 : -1;
    }
  });
};
const ReminderList = (props) => {

  const history = useHistory()
  const location=  useLocation()

  const queryParams = new URLSearchParams(location.search)
  const isSortingAscending = queryParams.get('sort') === 'asc'

  const sortedReminders = sortReminders(props.reminders, isSortingAscending)

  const changeSortHandler = ()  => {
    history.push({
      pathname : location.pathname,
      search : `?sort=${(isSortingAscending?'desc ' : 'asc')}`
    })
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}>Sort {isSortingAscending?'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedReminders.map((reminder) => (
          <ReminderItem
            key={reminder.id}
            id={reminder.id}
            text={reminder.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default ReminderList;