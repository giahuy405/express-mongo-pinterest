  const mongoose = require("mongoose");
  const commentSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    img_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Img",
      required: true,
    },
    date_comment: { type: Date, default: Date.now },
    content_comment: { type: String , required: true},
  });

  const Comment = mongoose.model("Comment", commentSchema);
  module.exports = Comment
