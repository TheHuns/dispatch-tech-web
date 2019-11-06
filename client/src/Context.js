import React, { Component } from "react";
const TicketContext = React.createContext();

export class TicketContextProvider extends Component{
    state={
        todayTicketCount:0,
        openTicketCount: 0,
        tickets:[]
    }

    // Fetch Ticket List
    fetchTickets = () => {
        fetch("/tickets")
          .then(res => res.json())
          .then(data => this.setState({tickets: data}))
    }
   
    render() {
        const { children } = this.props;
        return(
            <TicketContext.Provider
                value={{
                    todayTicketCount: this.state.todayTicketCount,
                    openTicketCount: this.state.openTicketCount,
                    fetchTickets: this.fetchTickets,
                    tickets: this.state.tickets
                }}
                >
                    {children}
                </TicketContext.Provider>
        )
    
    }
}

export const TicketConsumer = TicketContext.Consumer;
export const TicketProvider = TicketContext.Provider;
export default TicketContext;
