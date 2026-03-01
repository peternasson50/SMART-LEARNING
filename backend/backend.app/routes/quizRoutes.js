const express = require("express");
const { getQuizzes, addQuiz } = require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getQuizzes);
router.post("/", authMiddleware, addQuiz);

module.exports = router;