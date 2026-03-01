import { useState, useEffect } from "react";
import { getQuiz } from "../services/api";

function Quiz({ quizId }) {
  const [quiz, setQuiz] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getQuiz(quizId)
      .then(res => setQuiz(res.data))
      .catch(err => setError(err.message));
  }, [quizId]);

  if (error) return <p>Error: {error}</p>;
  if (!quiz) return <p>Loading quiz...</p>;

  return (
    <div>
      <h2>{quiz.title}</h2>
      {quiz.questions.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          {q.options.map((opt, j) => (
            <button key={`${q.id}-${j}`}>{opt}</button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Quiz;