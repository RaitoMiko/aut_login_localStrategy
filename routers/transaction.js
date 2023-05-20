const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/transaction");

router.get("/", transactionController.list);

module.exports = router;
