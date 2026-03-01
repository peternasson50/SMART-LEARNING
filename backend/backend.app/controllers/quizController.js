const Quiz = require("../models/Quiz");

exports.getQuizzes = async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
};

exports.addQuiz = async (req, res) => {
  const quiz = await Quiz.create(req.body);
  res.json(quiz);
};