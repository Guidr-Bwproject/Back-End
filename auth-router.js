const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("./auth-model");

router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  console.log(user.password);

  Users.add(user)
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

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: "Welcome" });
      } else {
        res.status(401).json({ message: "Nice try." });
      }
    })
    .catch(error => {
      res.status(500).json({ message: "There was an error logging in." });
    });
});

module.exports = router;
