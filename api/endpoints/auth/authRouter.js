const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authModel = require("./authModel");
const secret = require("../../../secret");

// ================= REGISTER USER =================
router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  console.log(user.password);

  authModel
    .addUser(user)
    .then(user => {
      const token = getJwt(user);
      res.status(201).json({ message: "Welcome, here is your JWT:", token });
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error registering the new user. " });
    });
});

// ================= LOGIN USER =================
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  authModel
    .findUserBy({ username })
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

// ================= JWT =================
function getJwt(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    jwtid: 1
  };
  const options = {
    expiresIn: "8h"
  };

  return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;
