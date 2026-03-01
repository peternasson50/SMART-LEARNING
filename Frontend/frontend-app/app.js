// Navigation
function showSection(sectionId) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");
}

// Auth (Login)
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch("http://localhost:5000/api/auth/login", {   // ✅ backend URL
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  alert(data.token ? "Login successful!" : data.message);
});

// Courses
async function loadCourses() {
  const res = await fetch("http://localhost:5000/api/courses");       // ✅ backend URL
  const courses = await res.json();
  document.getElementById("courseList").innerHTML =
    courses.map(c => `<li>${c.title}</li>`).join("");
}
loadCourses();

// Quiz
function checkAnswer(answer) {
  if (answer === 4) {
    alert("Correct! 🎉");
  } else {
    alert("Oops, try again.");
  }
}
