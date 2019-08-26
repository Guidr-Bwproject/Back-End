const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const router = require("./routers, models, middleware/router");
const authRouter = require("./routers, models, middleware/authRouter");
const tripsRouter = require("./routers, models, middleware/tripsRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api", router);
server.use("/api/auth", authRouter);
server.use("/api/trips", tripsRouter);

module.exports = server;
