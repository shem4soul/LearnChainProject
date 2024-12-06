const progressData = []

const updateProgress = (userId, courseId, progress) => {
  const existing = progressData.find(
    (entry) => entry.userId === userId && entry.courseId === courseId
  )

  if (existing) {
    existing.progress = progress
  } else {
    progressData.push({ userId, courseId, progress })
  }
}

const getUserProgress = (userId) => {
  return progressData.filter((entry) => entry.userId === userId)
}

module.exports = { updateProgress, getUserProgress }
