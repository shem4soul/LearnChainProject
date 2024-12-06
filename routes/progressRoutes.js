const express = require('express')
const { updateProgress, getUserProgress } = require('../controllers/progressController')

const router = express.Router()

router.post('/progress', updateProgress);
router.get('/progress/:userId', getUserProgress)

module.exports = router
