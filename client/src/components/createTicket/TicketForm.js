import React from "react";

export default class TicketForm extends React.Component {
  state = {
    name: "",
    address: "",
    city: "",
    zip: "",
    dateRequested: "",
    serviceRequested: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="ticket-form-wrapper">
        <h2>Create Ticket Form</h2>
        <form action="">
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
            <input
              type="datetime"
              name="dateRequested"
              id="date"
              onChange={e => this.change(e)}
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
