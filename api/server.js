const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("./routers, models, middleware/authRouter");
const tripRouter = require("./routers, models, middleware/tripRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/trips", tripRouter);

// ================= SERVER TEST =================
server.get("/", (req, res) => {
  res.status(200).json({ server: "running" });
});

module.exports = server;

// ================= USER TEST DATA =================
// {
//   "title": "a title",
//   "tagline": "a tagline",
//   "age": 2,
//   "time_as_guide": "8 years",
//   "username": "a username",
//   "password": "a password",
//   "email": "an email"
// }

// ================= TRIP TEST DATA =================
// {
//   "title": "a trip",
//   "description": "a description",
//   "professional": false,
//   "duration": "3 months",
//   "date": "a date",
//   "location": "a location",
//   "image": "an image",
//   "user_id": 1
// }

// QUESTIONS:

// TO DO:
// add comments
// change migrations file name
// check all JSON messages
// check error handling
// possibly change update and delete models
