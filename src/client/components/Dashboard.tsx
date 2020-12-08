//for commit only
import React from "react";
import RemindersCell from "../components/Dashboard/Reminders/RemindersCell";
import Schedule from "./Dashboard/Events/Schedule";
import Messages from "../components/Dashboard/Messages";
import TaskList from "../components/Dashboard/TaskList";
import Profile from "../components/Auth0/Profile";
import CalendarApp from "./Calendar/CalendarApp";

const Dashboard: React.FC<IDashboardProps> = () => {
  return (
    <div className="container">
      {/* <div className="row display-flex mx-1 my-5">
                <div className="col-4">
                    <LoginButton /><LogoutButton />
                </div>
            </div> */}
      <div className="row display-flex mx-1 my-5">
        <div className="col-4">
          <Profile />
        </div>
      </div>
      <div className="row display-flex mx-1 my-5">
        <div className="col-12">
          <CalendarApp />
        </div>
      </div>
      <div className="row display-flex mx-1 my-5">
        <div className="col-4">
          <Messages />
          <Schedule />
        </div>
        <div className="col-8">
          <TaskList />
          <RemindersCell />
        </div>
      </div>
    </div>
  );
};

interface IDashboardProps {}

export default Dashboard;
