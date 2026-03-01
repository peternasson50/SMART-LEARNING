import React, { useEffect, useState } from "react";
import { getCourses } from "../services/api";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(res => setCourses(res.data));
  }, []);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(c => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;