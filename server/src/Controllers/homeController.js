const { successCode, errorCode, failCode } = require("../utils/response");
const Imgs = require("../Models/img.js");


const getImgList  = async (req, res) => {
    try {
        const data = await Imgs.find();
        successCode(res, "get img list successfully", data);
    } catch (err) {
      errorCode(res);
    }
  };
const getImgDetail = async (req, res) => {
    try {
        const {img_name} = req.body;
        const regex = new RegExp(img_name, "i"); // create case-insensitive regular expression from search term
        const foundImgs = await Imgs.find({ img_name: { $regex: regex } }); // search for records matching the regular expression
        successCode(res, "get detail img successfully", foundImgs);
    } catch (err) {
      errorCode(res);
    }
  };



  module.exports = {
    getImgList,getImgDetail
  };
  