const jwt = require("jsonwebtoken");
const {JWT_SECRET, JWT_TTL, JWT_REFRESH} = require('../../config/jwt');

const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const decode = jwt.verify(token, JWT_SECRET);
    console.log(" decode : ", decode);
    if (decode) {
      req.user = decode;
      return next();
    } else {
      res.status(401).send("Bạn Chưa Đăng Nhập");
    }
  } catch (error) {
    res.status(401).send("Bạn Chưa Đăng Nhập");
  }
};

module.exports = {
  authenticate,
};
