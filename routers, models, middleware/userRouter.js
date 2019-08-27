const router = require("express").Router();

const Model = require("./model");

// Adds new trip by that user
router.post("/:id", (req, res) => {
  const trip = req.body;

  Model.addTripToUser(trip)
    .then(trip => {
      res.status(201).json(trip);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error adding the new trip." });
    });
});

// display all trips relative to user
router.get("/:id/trips", (req, res) => {});

// edit trip
router.put("/:id/trips/:id", (req, res) => {});

// delete trip
router.delete("/:id/trips/:id", (req, res) => {});

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

// dummy data
// {
//     "title": "a trip",
//     "description": "a description",
//     "professional": false,
//     "time": "a time",
//     "date": "a date",
//     "location": "a location",
//     "price": "a price",
//     "image": "an image"
// }
