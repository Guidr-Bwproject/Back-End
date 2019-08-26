const router = require("express").Router();

const Users = require("./auth-model");

router.post("/register", (req, res) => {
  const user = req.body;

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
  const { username } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user) {
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
