const mongoose = require('mongoose');

// mapear dados dos users
const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId, // Id gerado automatico 
    ref: 'User' // referencias para qual model ta se referindo
  }
});

module.exports = mongoose.model('Spot', SpotSchema);