import React from "react";
import Ticket from "./Ticket";
import axios from "axios";

export default class Search extends React.Component {
  state = {
    tickets: []
  };

  componentDidMount() {
    fetch("/tickets").then(res => {
      const tickets = res.data;
      this.setState({ tickets });
      console.log(this.state.tickets);
    });
  }

  render() {
    const fakeTickets = [
      {
        name: "dehn",
        address: "1231 som street",
        date: "11/11/19",
        service: "get some faster internet"
      }
    ];

    return (
      <div className="ticket-list-wrapper">
        <h2>Ticket search form</h2>
        {fakeTickets.map((ticket, index) => {
          return (
            <Ticket
              key={index}
              name={ticket.name}
              date={ticket.date}
              service={ticket.service}
              address={ticket.address}
            />
          );
        })}
      </div>
    );
  }
}
