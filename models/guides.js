const mongoose = require('mongoose');// import mongoose
// extract the schema from that mongoose object


const Schema = mongoose.Schema;
// create a new post schema

const OriginSchema = new Schema({ region: String, tradition: String });

const guideSchema = new Schema({
  name: {
    type: String,
    required: true
  },
    guideType: {
    type: String,
    required: true
  },
  purpose: {
    type: [String],
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  origin: {
    type: OriginSchema,
    required: true
  },
});
// export the model
module.exports = mongoose.model('guide', guideSchema);