const jwt = require("jsonwebtoken");

// tạo token
const generateToken = (data) => {
    // đối với tk mongoDB _id nó tự tạo nên model ko cần thêm trường id, nó tự tạo nên ta phải parse về string để có thể generate token 
  let { _id } = data;
  _id = _id.toString();
  const newData = { ...data, _id };

  // data: string, number, object, buffer => ko có tham số thứ 3, nếu có tham số thứ 3 thì data ko dc truyền string
  let token = jwt.sign(newData, "node-30", {
    algorithm: "HS256",
    expiresIn: "3y",
  });
  return token;
};

// kiểm tra token
const checkToken = (token) => {
  return jwt.verify(token, "node-30");
};

// giải mã token
const decodeToken = (token) => {
  return jwt.decode(token);
};

const privateAPI = (req, res, next) => {
  try {
    // kiểm tra token
    let { token } = req.headers;
    checkToken(token);
    next();
  } catch (err) {
    res.status(401).send(err.message);
  }
};
module.exports = {
  generateToken,
  checkToken,
  decodeToken,
  privateAPI,
};
