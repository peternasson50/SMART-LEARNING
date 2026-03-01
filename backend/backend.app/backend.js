const express = require('express');
const mongoose = require('mongoose');
const Course = require('./models/Course'); // hakikisha path sahihi

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/smartlearning')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Test route
app.get('/', (req, res) => {
  res.send('Smart Learning backend is running!');
});

// CREATE course
app.post('/courses', async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all courses
app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE course
app.put('/courses/:id', async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
    );
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE course
app.delete('/courses/:id', async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
app.listen(3000, () => {
  console.log('🚀 Server running on port 3000');
});