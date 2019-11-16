import React from "react";
import TicketContext from "../../Context";

export default class Ticket extends React.Component {
  static contextType = TicketContext;

  onDelete = id => {
    console.log(id);
    this.context.deleteTicket(id);

    this.props.reloadTickets();
  };

  render() {
    const { index, name, address, service, id } = this.props;
    return (
      <div className="ticket-container">
        <h3>{index + 1 + "."}</h3>
        <div className="name">
          <strong>Name: </strong>
          <p>{name}</p>
        </div>
        <div className="address">
          <strong>Address: </strong>
          <p>{address}</p>
        </div>
        <div className="service">
          <strong>Service: </strong>
          <p>{service}</p>
        </div>
        <button>Details</button>
        <button onClick={this.onDelete.bind(this, id)}>Delete</button>
      </div>
    );
  }
}
