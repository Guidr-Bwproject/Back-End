const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const router = require("./routers, models, middleware/router");
const authRouter = require("./routers, models, middleware/authRouter");
const tripRouter = require("./routers, models, middleware/tripRouter");
const userRouter = require("./routers, models, middleware/userRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", router);
server.use("/api/auth", authRouter);
server.use("/api/trips", tripRouter);
server.use("/api/user", userRouter);

module.exports = server;

// TO DO/QUESTIONS:
// add comments
// change migrations file name
// do I need findTripById AND findUserById in model.js?
