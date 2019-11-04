const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TicketSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  zip: {
    type: Number,
    required: false
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
