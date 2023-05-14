const User = require("../Models/users.js");
const { successCode, errorCode, failCode } = require("../utils/response");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

const getAllUser = async (req, res) => {
  try {
    const data = await User.find();
    successCode(res, "get all user success", data);
  } catch (err) {
    errorCode(res, "internal server error");
  }
};
const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    let checkUser = await User.findOne({ email });
    // có user tồn tại trong database
    if (checkUser) {
      console.log(checkUser, "checkusser");
      let checkPass = bcrypt.compareSync(password, checkUser.password);
      if (checkPass) {
        let token = generateToken(checkUser); // ko dc truyền string number
        // tạo token rồi gửi xuống FE
        successCode(res, "Đăng nhập thành công", { access_token: token });
      } else {
        // sai mật khẩu
        failCode(res, "Sai mật khẩu", "");
      }
    } else {
      // Sai email
      failCode(res, "Vui lòng kiểm tra lại email", "");
    }
  } catch (err) {
    errorCode(res);
  }
};
const signUpUser = async (req, res) => {
  try {
    const { fullname, age, email, password } = req.body;
    let newData = {
      fullname,
      email,
      age,
      avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjblwVQ-GlXCaTJnkev2wwBkrWAZQzUehfQ&usqp=CAU",
      password: bcrypt.hashSync(password, 12),
    };
    // check email trùng
    let checkEmail = await User.findOne({ email });
    if (checkEmail) {
      failCode(res, "Email đã tồn tại", "");
      return;
    }
    await User.create(newData);
    successCode(res, "Đăng kí thành công", "");
  } catch (err) {
    errorCode(res);
  }
};

module.exports = {
  getAllUser,
  loginUser,
  signUpUser,
};
