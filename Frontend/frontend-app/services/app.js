import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursesPage from "./pages/CoursesPage";
import UsersPage from "./pages/UsersPage";
import QuizzesPage from "./pages/QuizzesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/quizzes" element={<QuizzesPage />} />
      </Routes>
    </Router>
  );
}

export default App;