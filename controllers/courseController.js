const { addCourse, getCourses } = require('../models/courseModel')

exports.addCourse = (req, res) => {
  const { courseId, courseName, reward } = req.body

  if (!courseId || !courseName || !reward) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  addCourse({ courseId, courseName, reward })
  res.status(201).json({ message: 'Course added successfully.' })
}

exports.getCourses = (req, res) => {
  res.status(200).json(getCourses())
}
