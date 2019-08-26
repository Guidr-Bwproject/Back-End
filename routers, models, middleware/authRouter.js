const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Model = require("./model");

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  console.log(user.password);

  Model.addUser(user)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error registering the new user. " });
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Model.findUserBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getJwt(user);
        res.status(200).json({ message: "Welcome, here is your JWT:", token });
      } else {
        res.status(401).json({ message: "Nice try." });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "There was an error logging in." });
    });
});

function getJwt(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    jwtid: 1
  };
  const options = {
    expiresIn: "8h"
  };
  const secret = {
    jwtSecret: process.env.JWT_SECRET || "secret"
  };

  return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;

// dummy data
// {
//   "title": "a title",
//   "tagline": "a tagline",
//   "age": 2,
//   "username": "a 2212username",
//   "password": "a password",
//   "email": "an 2122email"
// }