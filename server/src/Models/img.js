const mongoose = require('mongoose');const imgSchema = new mongoose.Schema({
  img_name: { type: String , required: true},
  img_url: {
    data:Buffer,
    contentType:String,
   },
  img_description: { type: String , required: true},
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Imgs = mongoose.model('Img', imgSchema);
module.exports = Imgs;