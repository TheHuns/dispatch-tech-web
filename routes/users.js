const express = require("express");
const router = express.Router();

const User = require("../models/User");

// route GET /users
// Return all users
router.get("/", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.error(err));
});

// route GET /users/findone
// Returns user if one exists for a specific device (native)
router.post("/findone", (req, res) => {
  User.find({ deviceId: req.body.deviceId })
    .then(user => res.json(user))
    .catch(err => console.error(err));
});

// route POST /users
// sets a new user
router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password,
    deviceId: req.body.deviceId
  });

  newUser.save().then(user => res.json(user));
});

module.exports = router;
