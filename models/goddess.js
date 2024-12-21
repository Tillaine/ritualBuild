const mongoose = require('mongoose');// import mongoose
// extract the schema from that mongoose object

const Schema = mongoose.Schema;
// create a new purpose schema

const GoddessSchema = new Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  religion: { type: String, required: true },
  gender: { type: String, required: true },
  purpose: { type: mongoose.Schema.Types.Mixed, required: true } // Allows arbitrary keys
});


// export the model 
module.exports = mongoose.model('goddess', GoddessSchema);