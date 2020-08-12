const mongoose = require("mongoose");

const dmlogSchema = new mongoose.Schema({
  eventdate: {
    type: Date,
    required: [true, "Please add an eventdate"],
  },
  lastname: {
    type: String,
    trim: true,
    required: [true, "Please type the lastname"],
    maxlength: [25, "The lastname cannot be longer than 25 characters"],
  },
  firstname: {
    type: String,
    trim: true,
    required: [true, "Please type the lastname"],
    maxlength: [25, "The firstname cannot be longer than 25 characters"],
  },
  samename: {
    type: Boolean,
    required: [
      true,
      "Please mentionne if the reservation is under the same name",
    ],
  },
  vip: {
    type: String,
    enum: ["1", "2", "3", "4", "5", "LS"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("dmlog", dmlogSchema);
