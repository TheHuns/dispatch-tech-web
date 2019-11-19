import React from "react";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addTicket } from "../../store/actions/tickets";
import tickets from "../../store/reducers/tickets";

import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";

class TicketForm extends React.Component {
  state = {
    name: "",
    address: "",
    city: "",
    zip: 0,
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
      .then(latLng => console.log("Success", latLng))
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
    console.log(e.keyCode);

    let {
      name,
      address,
      city,
      zip,
      dateRequested,
      serviceRequested
    } = this.state;

    if (
      name === "" ||
      address === "" ||
      city === "" ||
      zip === "" ||
      dateRequested === "" ||
      serviceRequested === ""
    ) {
      return console.log("fill in all blanks of form");
    } else {
      let ticket = {
        name,
        address,
        city,
        zip,
        dateRequested,
        serviceRequested
      };
      // console.log(JSON.stringify(ticket));
      // fetch("/tickets", {
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(ticket)
      // })
      //   .then(res => res.json())
      //   .then(data => console.log(data));
      this.props.addTicket(ticket);

      this.rerouteToTickets();
    }
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
            placeholder="enter name ..."
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
                      ? { backgroundColor: "#fafafa", cursor: "pointer" }
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
          {/* <label htmlFor="address">Address</label>
            <input type="text" name="address" onChange={e => this.change(e)} />
            <label htmlFor="city">City</label>
            <input type="text" name="city" onChange={e => this.change(e)} />
            <label htmlFor="zip">Zipcode</label>
            <input type="text" name="zip" onChange={e => this.change(e)} /> 

          <label htmlFor="date">Date requested</label>
           <DateTimePicker
            name="dateRequested"
            onChange={this.onDateChange}
            value={this.state.dateRequested}
            hourAriaLabel="true"
            dayAriaLable="true"
          /> */}
          <label htmlFor="service">Service Requested</label>
          <textarea
            name="serviceRequested"
            placeholder="describe service needed ..."
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
