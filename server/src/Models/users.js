const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: (props) => `Is not a valid email address!`,
    },
  },
  password: { type: String, required: true },
  fullname: { type: String, required: true },
  age: { type: Number, required: true  , validate: {
    validator: function(v) {
      return Number.isInteger(v) && v >= 1;
    },
    message: 'Age must be greater than 1'
  }},
  avatar: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
