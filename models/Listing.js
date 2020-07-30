const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String,
    required: true
  },  
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Listing = mongoose.model('listing', ListingSchema);