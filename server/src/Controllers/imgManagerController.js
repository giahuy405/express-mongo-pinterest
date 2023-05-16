const { successCode, errorCode, failCode } = require("../utils/response");
const User = require("../Models/users.js");
const SaveImg = require("../Models/save_img.js");
const Imgs = require("../Models/img.js");
const bcrypt = require("bcrypt");

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
    const { _id } = req.body;
    console.log(_id);
    let checkUser = await Imgs.findByIdAndDelete(_id);
    successCode(res, "get img list successfully", "");
  } catch (err) {
    errorCode(res);
  }
};

// ==========local uploading=========
// const Storage = multer.diskStorage({
//   destination: "tmp/uploads",
//   filename: (req, file, cb) => {
//     // cb(null, file.originalname); local
//   },
// });
// const upload = multer({
//   storage: Storage,
// }).single("img_url"); // this place need to have the same name when uploading
// const addNewImageFile = async (req, res) =>
//   upload(req, res, (err) => {
//     const { img_name, img_description, user_id } = req.body;
//     if (err) console.log(err);
//     else {
//       const newImage = new Imgs({
//         img_name,
//         img_description,
//         user_id,
//         img_url: {
//           data: req.file.filename,
//           contentType: "/image/png", // contentType: req.file.mimetype,
//         },
//       });
//       newImage
//         .save()
//         .then(() => res.send("successfully uploaded"))
//         .catch((err) => console.log(err));
//     }
//   });

// upload on cloundinary
const cloudinary = require("cloudinary").v2;
// Configuration
cloudinary.config({
  cloud_name: "driba3vfy",
  api_key: "211669555581787",
  api_secret: "HryfQ_Cb6VnjYS4x_ei7m8zG9dU",
});

const addNewImageFile = async (req, res) => {
  try {
    const { img_name, img_description, user_id } = req.body;
    const file = req.files.img_url;
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "images",
    });
    console.log(result);
    let newData = {
      img_name,
      img_description,
      user_id,
      img_url: result.url,
    };
    await Imgs.create(newData);
    successCode(res, "  thành công", newData);
  } catch (err) {
    errorCode(res);
  }
};

const putInfoUser = async (req, res) => {
  try {
    const { email, password, fullname, age, avatar, user_id } = req.body;
    // check email trùng
    let checkEmail = await User.findOne({ email });
    if (checkEmail) {
      failCode(res, "Email đã tồn tại", "");
      return;
    }
    // Check if user with the provided ID exists in the database
    const foundUser = await User.findById(user_id);
    if (!foundUser) {
      return failCode(res, "User not found");
    }

    // Update user information
    foundUser.email = email || foundUser.email;
    foundUser.password = bcrypt.hashSync(password, 12) || foundUser.password;
    foundUser.fullname = fullname || foundUser.fullname;
    foundUser.age = age || foundUser.age;
    foundUser.avatar = avatar || foundUser.avatar;

    // Save updated user information to the database
    const updatedUser = await foundUser.save();
    successCode(res, " successfully", updatedUser);
  } catch (err) {
    errorCode(res);
  }
};

module.exports = {
  getInfoUser,
  getSaveImg,
  getImageOfUser,
  deleteImage,
  putInfoUser,
  addNewImageFile,
};
