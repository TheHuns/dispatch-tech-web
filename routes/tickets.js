const express = require("express");
const router = express.Router();
const cors = require("cors");

// Item model
const Ticket = require("../models/Ticket");

// @route GET /tickets
// @desc Get all tickets
// @access Public
router.get("/", cors(), (req, res) => {
  Ticket.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
    .catch(err => console.error(err));
});

// @route GET /tickets/open
// @desc Get open tickets only
// @access public
router.get('/open', (req, res) => {
  Ticket.find({"isOpen": "true"})
  .then(tickets => res.json(tickets))
  .catch(err => console.error(err))
})

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
