Web3 Learn-to-Earn Platform API
A lightweight RESTful API built with Node.js and Express for managing courses and tracking user progress in a Web3 Learn-to-Earn platform. This backend application adheres to the MVC (Model-View-Controller) architecture for clean and maintainable code.

Features
Course Management
Add new courses to the platform.
Retrieve all available courses.
Progress Tracking
Update a user’s progress for specific courses.
Retrieve all progress data for a particular user.
API Endpoints
Courses
Add a Course

POST /api/courses
Request Body:
json

{
  "courseId": "101",
  "courseName": "Blockchain Basics",
  "reward": 10
}
Response:
json

{
  "message": "Course added successfully."
}
Retrieve All Courses

GET /api/courses
Response:
json

[
  {
    "courseId": "101",
    "courseName": "Blockchain Basics",
    "reward": 10
  }
]
Progress
Update Progress

POST /api/progress
Request Body:
json

{
  "userId": "123",
  "courseId": "101",
  "progress": 50
}
Response:
json
Copy code
{
  "message": "Progress updated successfully."
}
Get User Progress

GET /api/progress/:userId
Response:
json
Copy code
[
  {
    "userId": "123",
    "courseId": "101",
    "progress": 50
  }
]


Installation & Setup
Prerequisites
Node.js (v16+ recommended)
npm (Node Package Manager)

Steps to Run Locally
Clone the repository:


git clone https://github.com/shem4soul/LearnChainProject.git
cd web3-learn-to-earn
Install dependencies:


npm install
Start the server:
node index.js

Access the API at:


http://localhost:8000/api
