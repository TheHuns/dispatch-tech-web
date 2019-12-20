import React from "react";
import { connect } from "react-redux";
import { addTicket } from "../../store/actions/tickets";

import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

class TicketForm extends React.Component {
  state = {
    name: "",
    lat: null,
    long: null,
    dateRequested: new Date(),
    serviceRequested: "",
    autoAddress: ""
  };

  rerouteToTickets = () => {
    this.props.history.push("/search");
  };

  onDateChange = date => this.setState({ date });

  handleChange = address => {
    this.setState({ autoAddress: address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>
        this.setState({
          lat: latLng.lat,
          long: latLng.lng
        })
      )
      .catch(error => console.error("Error", error));
  };
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    let {
      name,
      lat,
      long,
      autoAddress,
      dateRequested,
      serviceRequested
    } = this.state;

    //Add logic to make sure form is filled out completely

    let ticket = {
      name,
      autoAddress,
      lat,
      long,
      dateRequested,
      serviceRequested
    };

    this.props.addTicket(ticket);

    this.rerouteToTickets();
  };

  render() {
    return (
      <div className="ticket-form-wrapper">
        <h2>Create Ticket Form</h2>
        <form action="post" onSubmit={e => this.onSubmit(e)}>
          <label htmlFor="name">Customer Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name ..."
            onChange={e => this.change(e)}
          />
          <label>Address</label>
          <PlacesAutocomplete
            value={this.state.autoAddress}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading
            }) => (
              <div className="autocomplete-address">
                <input
                  {...getInputProps({
                    placeholder: "Search Places ...",
                    className: "location-search-input"
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? {
                          backgroundColor: "#dd5735",
                          cursor: "pointer",
                          color: "#fff"
                        }
                      : { backgroundColor: "#ffffff", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>

          <label htmlFor="service">Service Requested</label>
          <textarea
            name="serviceRequested"
            placeholder="Describe service needed ..."
            id="service"
            cols="30"
            rows="10"
            onChange={e => this.change(e)}
          ></textarea>

          <div className="button-area">
            <button type="submit" id="submit-button">
              Submit Ticket
            </button>
            <button type="reset" id="reset-button">
              Reset Form
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tickets: state.tickets };
};
const mapDispatchToProps = {
  addTicket
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);
