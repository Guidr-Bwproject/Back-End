const router = require("express").Router();

const Model = require("./model");

// gets all trips
router.get("/", (req, res) => {
  Model.getTrips()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error getting the trips." });
    });
});

router.post("/", (req, res) => {
  const trip = req.body;

  Model.addTrip(trip)
    .then(trip => {
      res.status(201).json(trip);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error adding the new trip." });
    });
});

module.exports = router;

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
