const express = require("express");
const session = require("express-session");

const authentication = require("./routers/authentication");
const transaction = require("./routers/transaction");
const passport = require("passport");

const app = express();
const port = 3000;

app.use(express.urlencoded());
app.set("view engine", "ejs");

app.use(
  session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authentication);
app.use("/transactions", transaction);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
