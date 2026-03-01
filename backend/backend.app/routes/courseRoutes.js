const express = require("express");
const { getCourses, addCourse } = require("../backend.app/controllers/courseController");
const authMiddleware = require("../backend.app/middleware/authMiddleware");
const router = express.Router();

router.get("/", getCourses);
router.post("/", authMiddleware, addCourse);

module.exports = router;