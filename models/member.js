const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  create_date: {type: Date, default: new Date() }
})

module.exports = mongoose.model("member", memberSchema);