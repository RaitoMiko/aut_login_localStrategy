const { User } = require("../models");

exports.renderLoginScreen = (req, res) => {
  res.render("login");
};

exports.doLogin = async (req, res) => {
  const user = await User.findOne({
    where: { username: req.body.username, password: req.body.password },
  });

  if (user) {
    res.send("Login berhasil");
  } else {
    res.status(401).send("Login gagal");
  }
};

exports.loginSuccess = (req, res) => {
  res.send("Login success");
};
