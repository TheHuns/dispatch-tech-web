import React, { useEffect, useState, Suspense } from "react";
import Ticket from "./Ticket";
import { connect } from "react-redux";

import { getTickets } from "../../store/actions/tickets";
import TicketDetailModal from "./TicketDetailModal";

class Search extends React.Component {
  state = {
    isModalOpen: false,
    detailIndex: 0,
    isLoading: true,
    tickets: []
  };

  componentDidMount() {
    this.props.getTickets();

    setTimeout(this.setState({ isLoading: false }), 3000);
  }

  handleModalOpen = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  render() {
    if (this.state.isLoading) return <h2>Loading ...</h2>;

    const { tickets } = this.props.tickets;
    console.log(tickets);

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
              autoAddress={ticket.autoAddress}
              id={ticket._id}
              handleModalOpen={this.handleModalOpen}
            />
          );
        })}
        {this.state.isModalOpen ? (
          <TicketDetailModal
            ticket={this.props.tickets[[this.state.detailIndex]]}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tickets: state.tickets };
};
const mapDispatchToProps = {
  getTickets
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
