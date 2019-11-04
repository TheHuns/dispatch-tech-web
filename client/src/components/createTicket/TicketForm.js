import React from "react";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";
import { Redirect } from "react-router-dom";

export default class TicketForm extends React.Component {
  state = {
    name: "",
    address: "",
    city: "",
    zip: 0,
    dateRequested: new Date(),
    serviceRequested: ""
  };

  rerouteToTickets = () => {
    this.props.history.push("/search");
  };

  onDateChange = date => this.setState({ date });

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
      console.log(JSON.stringify(ticket));
      fetch("/tickets", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket)
      })
        .then(res => res.json())
        .then(data => console.log(data));

      this.rerouteToTickets();
    }
  };

  render() {
    return (
      <div className="ticket-form-wrapper">
        <h2>Create Ticket Form</h2>
        <form action="post" onSubmit={e => this.onSubmit(e)}>
          <div className="left-column">
            <label htmlFor="name">Customer Name</label>
            <input type="text" name="name" onChange={e => this.change(e)} />
            <label htmlFor="address">Address</label>
            <input type="text" name="address" onChange={e => this.change(e)} />
            <label htmlFor="city">City</label>
            <input type="text" name="city" onChange={e => this.change(e)} />
            <label htmlFor="zip">Zipcode</label>
            <input type="text" name="zip" onChange={e => this.change(e)} />
          </div>
          <div className="right-column">
            <label htmlFor="date">Date requested</label>
            <DateTimePicker
              name="dateRequested"
              onChange={this.onDateChange}
              value={this.state.dateRequested}
              hourAriaLabel="true"
              dayAriaLable="true"
            />
            <label htmlFor="service">Service Requested</label>
            <textarea
              name="serviceRequested"
              id="service"
              cols="30"
              rows="10"
              onChange={e => this.change(e)}
            ></textarea>
          </div>
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
