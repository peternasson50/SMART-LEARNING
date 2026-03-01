// server.js
const express = require('express');
const mongoose = require('mongoose');
const Course = require('./models/Course'); // import model ya Course

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/smartlearning', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Test route
app.get('/', (req, res) => {
  res.send('Smart Learning backend is running!');
});

// Kuongeza course mpya
app.post('/courses', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/courses', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

app.listen(3000, () => {
  console.log('🚀 Server running on port 3000');
});
app.get("/api/test-db", async (req, res) => {
  try {
    const courses = await mongoose.connection.db.collection("courses").find().toArray();
    res.json({ success: true, count: courses.length, data: courses });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

app.get("/api/test-db", async (req, res) => {
  try {
    const courses = await mongoose.connection.db.collection("courses").find().toArray();
    res.json({ success: true, count: courses.length, data: courses });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});