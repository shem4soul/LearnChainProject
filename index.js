const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const courseRoutes = require('./routes/courseRoutes')
const progressRoutes = require('./routes/progressRoutes')


dotenv.config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8000

if (!process.env.MONGODB_URL) {
  console.error("MONGODB_URL is not set in the environment variables.")
  process.exit(1)
}

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MONGODB CONNECTED!"))
  .catch((error) => console.error("MongoDB connection error:", error))


// Routes
app.use('/api', courseRoutes)
app.use('/api', progressRoutes)



// Start Server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
