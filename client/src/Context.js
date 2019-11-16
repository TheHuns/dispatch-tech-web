import React, { Component } from "react";
const TicketContext = React.createContext();

export class TicketContextProvider extends Component {
  state = {
    todayTicketCount: 0,
    openTicketCount: 0,
    tickets: [],
    setValue: newValue => {
      this.setState({ tickets: newValue });
    }
  };

  componentDidMount() {
    this.fetchTickets();
  }

  // Fetch Ticket List
  fetchTickets = () => {
    fetch("/tickets")
      .then(res => res.json())
      .then(data =>
        this.setState(() => {
          return {
            tickets: data
          };
        })
      );
  };

  deleteTicket = id => {
    fetch(`/tickets`, {
      method: "delete",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: id })
    })
      .then(res => res.json())
      .then(data => console.log("the folloding has been deleted" + data));
  };

  render() {
    const { children } = this.props;
    return (
      <TicketContext.Provider
        value={{
          todayTicketCount: this.state.todayTicketCount,
          openTicketCount: this.state.openTicketCount,
          fetchTickets: this.fetchTickets,
          tickets: this.state.tickets,
          deleteTicket: this.deleteTicket
        }}
      >
        {children}
      </TicketContext.Provider>
    );
  }
}

export const TicketConsumer = TicketContext.Consumer;
export const TicketProvider = TicketContext.Provider;
export default TicketContext;
