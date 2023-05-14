const mongoose = require("mongoose");
const saveImgSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  img_id: { type: mongoose.Schema.Types.ObjectId, ref: "Img", required: true },
  date_save_img: { type: Date, default: Date.now },
});
const SaveImg = mongoose.model("SaveImg", saveImgSchema);

module.exports = SaveImg;
