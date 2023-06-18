const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  const saveUser = await newUser.save();
  res.status(201).json(saveUser);
});

//LOGIN
router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  !user && res.status(401).json("Thong Tin Dang Nhap Sai");
  const hashPassword = CryptoJS.AES.decrypt(
    user.password,
    process.env.PASS_SEC
  );
  const OriginalPassword = hashPassword.toString(CryptoJS.enc.Utf8);
  OriginalPassword != req.body.password && res.status(401).json("Mat Khau Sai");
  const accessToken = jwt.sign(
    { id: user._id, isAdmin: user.isAdmin },
    process.env.JWT_SEC,
    { expiresIn: "3d" }
  );
  const { password, ...others } = user._doc;
  res.status(200).json({ ...others, accessToken });
});

module.exports = router;
