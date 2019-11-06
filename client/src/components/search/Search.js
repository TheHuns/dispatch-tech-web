import React from "react";
import Ticket from "./Ticket";
import * as Spinner from "react-spinkit";
import TicketContext, { TicketConsumer } from '../../Context'

export default class Search extends React.Component {
  static contextType = TicketContext;
  state = {
    tickets: [],
    isLoading: false
  };

  fetchTickets = async() => {
    console.log('fetch tickets in search component' + this.context)
    let ticketList = await this.context.fetchTickets();

    this.setState({tickets: ticketList, isLoading: false})
  }

  componentDidMount () {
    this.setState({ isLoading: true });

    this.context.fetchTickets()    
  }

  reloadTickets = () => {
    this.props.history.push("/search");
  };

  render() {
    const { tickets, isLoading } = this.state;
    // if (isLoading) {
    //   return <Spinner className="spinner" name="three-bounce" color="coral" />;
    // }

    return (
      <TicketConsumer>

        <div className="ticket-list-wrapper">
          <h2>Current Open Tickets</h2>
  
          {value => {
            if(value.ticket === []){
              return <Spinner className="spinner" name="three-bounce" color="coral" />;
            } else {

              value.tickets.map((ticket, index) => {
              return (
                <Ticket
                  index={index}
                  key={index}
                  name={ticket.name}
                  date={ticket.dateRequested}
                  service={ticket.serviceRequested}
                  address={ticket.address}
                  id={ticket._id}
                  reloadTickets={this.reloadTickets}
                />
              );
            })
            }
          }}
        </div>
      </TicketConsumer>
      );

    }
}
