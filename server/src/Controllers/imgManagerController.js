const { successCode, errorCode, failCode } = require("../utils/response");
const User = require("../Models/users.js");
const SaveImg = require("../Models/save_img.js");
const Imgs = require("../Models/img.js");

const getInfoUser = async (req, res) => {
  try {
    const { _id } = req.body;
    let checkUser = await User.findOne({ _id });
    successCode(res, "get info successfully", checkUser);
  } catch (err) {
    errorCode(res);
  }
};

const getSaveImg = async (req, res) => {
  try {
    const { user_id } = req.body;
    let checkUser = await SaveImg.find({ user_id });
    successCode(res, "get img list successfully", checkUser);
  } catch (err) {
    errorCode(res);
  }
};

const getImageOfUser = async (req, res) => {
  try {
    const { user_id } = req.body;
    let checkUser = await Imgs.find({ user_id });
    successCode(res, "get img list successfully", checkUser);
  } catch (err) {
    errorCode(res);
  }
};
const deleteImage = async (req, res) => {
    try {
      const {_id } = req.body;
      console.log(_id)
      let checkUser = await Imgs.findByIdAndDelete(_id);
      successCode(res, "get img list successfully", "");
    } catch (err) {
      errorCode(res);
    }
  };
  const addNewImage = async (req, res) => {
    try {
      const { img_name,img_url, img_description,user_id } = req.body;
 
      let checkUser = await Imgs.create( { img_name,img_url, img_description,user_id });
      successCode(res, " successfully", checkUser);
    } catch (err) {
      errorCode(res);
    }
  };
module.exports = {
  getInfoUser,
  getSaveImg,
  getImageOfUser,deleteImage,addNewImage
};
