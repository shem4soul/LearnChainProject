const { updateProgress, getUserProgress } = require('../models/progressModel')

exports.updateProgress = (req, res) => {
  const { userId, courseId, progress } = req.body

  if (!userId || !courseId || progress == null) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  updateProgress(userId, courseId, progress)
  res.status(200).json({ message: 'Progress updated successfully.' })
};

exports.getUserProgress = (req, res) => {
  const { userId } = req.params

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required.' })
  }

  const userProgress = getUserProgress(userId)
  res.status(200).json(userProgress)
}
