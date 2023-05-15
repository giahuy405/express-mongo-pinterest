const { successCode, errorCode, failCode } = require("../utils/response");
const SaveImg = require("../Models/save_img.js");
const Comment = require("../Models/comment.js");
const Imgs = require("../Models/img.js");

const mongoose = require("mongoose");

const getInfoImageAndUser = async (req, res) => {
  try {
    const { _id } = req.body;
    const foundImg = await Imgs.findOne({ _id })
      .populate("user_id", "fullname email age avatar")
    
    if (!foundImg) return failCode(res);

    successCode(res, "Found image", foundImg);
  } catch (err) {
    errorCode(res, "internal server error");
  }
};

const getComment = async (req, res) => {
  try {
    const { img_id } = req.body;
    const foundComment = await Comment.findOne({ img_id });

    if (!foundComment) return failCode(res);

    successCode(res, "Found cmt", foundComment);
  } catch (err) {
    errorCode(res, "internal server error");
  }
};

const getSaveImage = async (req, res) => {
  try {
    const { img_id } = req.body;
    const foundItem = await SaveImg.findOne({ img_id });

    if (!foundItem) return failCode(res, "User did not save this image");

    successCode(res, "Found ", "Đã lưu hình");
  } catch (err) {
    errorCode(res, "internal server error");
  }
};
const postComment = async (req, res) => {
  try {
    const { user_id, img_id, content_comment } = req.body;
    const newItem = await Comment.create({
      user_id,
      img_id,
      content_comment,
    });

    successCode(res, "Found cmt", newItem);
  } catch (err) {
    errorCode(res, "internal server error");
  }
};

module.exports = {
  getInfoImageAndUser,
  getComment,
  getSaveImage,
  postComment,
};
