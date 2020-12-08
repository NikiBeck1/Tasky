import * as React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import RemindersCell from "./components/Dashboard//Reminders/RemindersCell";
import EditReminder from "./components/Dashboard/Reminders/EditReminders";
import Dashboard from "./components/Dashboard";
import EditReminders from "./components/Dashboard/Reminders/EditReminders";
import Home from "./components/Home";
import LoginPage from "./components/Auth0/LoginPage";
import CreateAccount from "./components/Auth0/CreateAccount";
import Calendar from "./components/Calendar/CalendarApp";
import LogOutPage from "./components/Auth0/LogoutPage";
import PrivateRoute from "./components/Auth0/private-route";
import Navbar from "./components/Dashboard/Navbar";
import LoginButton from "../client/components/Auth0/LoginButton";
import LogoutButton from "../client/components/Auth0/LogoutButton";

const App: React.FC<IAppProps> = () => {
  return (
    <Router>
      <nav className="navbar sticky-top navbar">
        <img
          src="../assets/Tasky-logo-white.png"
          alt="tasky logo"
          className="d-flex justify-content-left mx-auto"
          id="main-logo"
        ></img>

        <h1 className="text-light">TASKY</h1>

        <LoginButton />
        <LogoutButton />
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/login" component={LoginPage} /> */}
        <Route path="/createaccount" component={CreateAccount} />
        <PrivateRoute path="/logout" component={LogOutPage} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/:id/edit" component={EditReminders} />
      </Switch>
    </Router>
  );
};

interface IAppProps {}

export default App;
