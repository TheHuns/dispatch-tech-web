const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tickets: {
    type: Array,
    default: []
  },
  deviceId: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("user", UserSchema);
