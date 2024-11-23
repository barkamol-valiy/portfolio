const express = require("express");

const {
  reqgisterAdmin,
  loginAdmin,
} = require("../controllers/adminController");

const router = express.Router();

router.post("/register", reqgisterAdmin);
router.post("/login", loginAdmin);

module.exports = router;
