const express = require('express')
const { addCourse, getCourses } = require('../controllers/courseController')

const router = express.Router()

router.post('/courses', addCourse)
router.get('/courses', getCourses)

module.exports = router
