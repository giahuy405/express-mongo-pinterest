const mongoose = require('mongoose');const imgSchema = new mongoose.Schema({
  img_name: { type: String },
  img_url: { type: String },
  img_description: { type: String },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Imgs = mongoose.model('Img', imgSchema);
module.exports = Imgs;