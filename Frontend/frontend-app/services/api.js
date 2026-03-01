const API_URL = "http://localhost:3000/api";

export async function getCourses() {
  const res = await fetch(`${API_URL}/courses`);
  return res.json();
}

export async function getUsers() {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
}

export async function getQuizzes() {
  const res = await fetch(`${API_URL}/quizzes`);
  return res.json();
}