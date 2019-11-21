const express = require("express");
const router = express.Router();
const cors = require("cors");

// Item model
const Ticket = require("../models/Ticket");

// @route GET api/items
// @desc Get all items
// @access Public
router.get("/", cors(), (req, res) => {
  Ticket.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route POST api/items
// @desc Create a POST
// @access Private
router.post("/", (req, res) => {
  const newTicket = new Ticket({
    name: req.body.name,
    autoAddress: req.body.autoAddress,
    lat: req.body.lat,
    lng: req.body.long,
    dateRequested: req.body.dateRequested,
    serviceRequested: req.body.serviceRequested
  });

  newTicket.save().then(ticket => res.json(ticket));
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Private
router.delete("/", (req, res) => {
  Ticket.findById(req.body.id)
    .then(ticket => ticket.remove().then(() => res.json(ticket)))
    .catch(err => res.status(err).json({ success: false }));
});

module.exports = router;
