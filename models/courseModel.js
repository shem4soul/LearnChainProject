
const courses = []

const addCourse = (course) => {
  courses.push(course)
}

const getCourses = () => courses

module.exports = { addCourse, getCourses }
