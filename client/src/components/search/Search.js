import React from "react";
import { connect } from "react-redux";

import { getTickets } from "../../store/actions/tickets";

class Search extends React.Component {
  state = {
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
    return (
      <div className="ticket-list-wrapper">
        <h2>Current Open Tickets</h2>

        <table className="ticket-table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Service</th>
              <th>Date Requested</th>
            </tr>
            {tickets.map((ticket, index) => {
              const {
                name,
                autoAddress,
                serviceRequested,
                dateRequested
              } = ticket; //destructuring
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{autoAddress}</td>
                  <td>{serviceRequested}</td>
                  <td>{dateRequested}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
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
