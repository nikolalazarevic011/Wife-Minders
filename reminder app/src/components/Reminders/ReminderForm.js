import React from 'react'
import { useRef,Fragment ,useState} from 'react';
import {Prompt } from 'react-router-dom'
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './ReminderForm.module.css';

const ReminderForm = (props) => {
  const [isEntering, setIsEntering] =useState(false)
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddReminder({  text: enteredText });
  }

  const finishEnteringHandler = ()   => {
    setIsEntering(false);
  }
  const formFocusHandler = ()  => {
    setIsEntering(true)
  }

  return (
    <Fragment>
      <Prompt when={isEntering} message={(location)=> 'Are you sure you want to leave? All your entered data will be lost!'}/>
    <Card>
      <form className={classes.form} onFocus={formFocusHandler} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={finishEnteringHandler} className='btn'>Add Reminder</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default ReminderForm;