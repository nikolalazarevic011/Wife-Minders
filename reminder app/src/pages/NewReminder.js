import React from 'react'
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ReminderForm from "../components/Reminders/ReminderForm";
import useHttp from "../hooks/use-http";
import { addReminder } from "../lib/api";

const NewReminder = () => {
  const { sendRequest, status } = useHttp(addReminder);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/reminders");
    }
  }, [status, history]);

  const addReminderHandler = (reminderData) => {
    sendRequest(reminderData);
  };

  return (
    <ReminderForm
      isLoading={status === "pending"}
      onAddReminder={addReminderHandler}
    />
  );
};

export default NewReminder;
