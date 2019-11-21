const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TicketSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  autoAddress: {
    type: String,
    required: false
  },
  lat: {
    type: Number
  },
  lng: {
    type: Number
  },
  dateRequested: {
    type: Date,
    required: false
  },
  serviceRequested: {
    type: String,
    required: true
  },
  dateSubmitted: {
    type: Date,
    default: Date.now
  }
});

module.exports = Ticket = mongoose.model("ticket", TicketSchema);
