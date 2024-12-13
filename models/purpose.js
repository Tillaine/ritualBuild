const mongoose = require('mongoose');// import mongoose
// extract the schema from that mongoose object


const Schema = mongoose.Schema;
// create a new purpose schema

const PurposeSchema = new Schema({
  purpose: {
    type: String,
    required: true
  }
});
// export the model
module.exports = mongoose.model('Purpose', PurposeSchema);