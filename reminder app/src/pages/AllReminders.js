import React from 'react'
import { useEffect } from "react";
import ReminderList from "../components/Reminders/ReminderList";
import useHttp from "../hooks/use-http";
import { getAllReminders } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoRemindersFound from "../components/Reminders/NoRemindersFound";


const AllReminders = () => {
  const {
    sendRequest,
    status,
    data: loadedReminders,
    error,
  } = useHttp(getAllReminders, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === 'completed' && (!loadedReminders || loadedReminders.length === 0)) {
          return <NoRemindersFound/>
  }

  return <ReminderList reminders={loadedReminders} />;
};

export default AllReminders;
