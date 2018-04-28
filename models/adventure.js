const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adventureSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Adventure = mongoose.model("Adventure", adventureSchema);

module.exports = Adventure;