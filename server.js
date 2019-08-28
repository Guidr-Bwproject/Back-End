const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("./routers, models, middleware/authRouter");
const tripRouter = require("./routers, models, middleware/tripRouter");
// const authenticate = require("./routers, models, middleware/authMiddleware");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/trips", tripRouter);

// TEST
server.get("/", (req, res) => {
  res.status(200).json({ server: "running" });
});

module.exports = server;

// QUESTIONS:
// are my models okay? do I need findTripById AND findUserById in model.js?
// where am I supposed to put the authentication middleware? I put them in the last 3 trip routers but it feels wrong.
// data in the tables
// do I need any endpoint for portfolio page (allows user to add title, tagline, age, and length of time spent as a guide)
// time for users table

// TO DO:
// add comments
// change migrations file name
// check all JSON messages
// check error handling
