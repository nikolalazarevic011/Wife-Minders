
import React, {  Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//import AllReminders from "./pages/AllReminders";
//import NewReminder from "./pages/NewReminder";
import UserProfileButton from "./components/Layout/UserProfileButton";
import Layout from "./components/Layout/Layout";
//import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";


const AllReminders = React.lazy(()=> import ("./pages/AllReminders"));
const NotFound = React.lazy(()=> import ("./pages/NotFound"))
const NewReminder = React.lazy(()=> import ("./pages/NewReminder"))

function App() {
  return (
    <Layout>
      <Suspense fallback={
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <LoadingSpinner/>
        </div>
      }>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/reminders" />
        </Route>
        <Route path="/reminders" >
          <AllReminders />
        </Route>
        <Route path="/new-reminder" >
          <NewReminder />
        </Route>
        <Route path="/user-profile">
          <UserProfileButton />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
