import React from "react";
import Ticket from "./Ticket";
import axios from "axios";
import * as Spinner from "react-spinkit";

export default class Search extends React.Component {
  state = {
    tickets: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("/tickets")
      .then(res => res.json())
      .then(data => this.setState({ tickets: data, isLoading: false }));
  }

  render() {
    const { tickets, isLoading } = this.state;
    if (isLoading) {
      return <Spinner className="spinner" name="three-bounce" color="coral" />;
    }

    return (
      <div className="ticket-list-wrapper">
        <h2>Current Open Tickets</h2>

        {tickets.map((ticket, index) => {
          return (
            <Ticket
              index={index}
              key={index}
              name={ticket.name}
              date={ticket.dateRequested}
              service={ticket.serviceRequested}
              address={ticket.address}
            />
          );
        })}
      </div>
    );
  }
}
