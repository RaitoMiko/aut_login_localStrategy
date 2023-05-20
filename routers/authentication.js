const express = require("express");
const passport = require("../lib/passport");

const router = express.Router();

const authenticationController = require("../controllers/authentication");

router.get("/login", authenticationController.renderLoginScreen);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  authenticationController.loginSuccess
);

router.get(
  "/coba-middleware",
  (req, res, next) => {
    console.log("MIDDLEWARE 1");
    next();
  },
  (req, res) => {
    console.log("MIDDLEWARE 2");
    res.send("Berhasil");
  }
);

module.exports = router;
