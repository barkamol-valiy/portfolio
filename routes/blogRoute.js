const express = require("express");
const blog = require("../controllers/blogController");
const router = express.Router();

router.get("/", blog.home);

module.exports = router;
