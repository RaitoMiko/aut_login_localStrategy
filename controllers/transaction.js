exports.list = (req, res) => {
  if (req.isAuthenticated()) {
    res.send("List of transaction");
  } else {
    res.redirect("/login");
  }
};
