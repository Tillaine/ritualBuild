const mongoose = require('mongoose');// import mongoose
// extract the schema from that mongoose object


const Schema = mongoose.Schema;
// create a new purpose schema

const CrystalSchema = new Schema({
  name: { type: String, required: true },
  purpose: { type: mongoose.Schema.Types.Mixed, required: true } // Allows arbitrary keys
});


// export the model 
module.exports = mongoose.model('crystal', CrystalSchema);