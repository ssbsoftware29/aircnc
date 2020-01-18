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
}, {
  toJSON: {
    virtuals: true
  },
});

SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`
});
module.exports = mongoose.model('Spot', SpotSchema);