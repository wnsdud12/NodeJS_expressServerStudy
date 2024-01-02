const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postingSchema = new Schema({
  title: String,
  content: String,
  create_date: {type: Date, default: new Date() }
})

module.exports = mongoose.model("post", postingSchema);