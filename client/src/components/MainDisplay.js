import React from "react";
import Header from "./Header";
import Dashboard from "./dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import Techs from "./techsOnDuty/Techs";
import TicketForm from "./createTicket/TicketForm";
import Search from "./search/Search";
import { relative } from "path";

export default function MainDisplay() {
  return (
    <div style={{ position: relative }}>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/techs" component={Techs} />
        <Route path="/ticketForm" component={TicketForm} />
        <Route path="/search" component={Search} />
      </Switch>
    </div>
  );
}
