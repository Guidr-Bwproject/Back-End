const router = require("express").Router();

const Model = require("./model");
const authenticate = require("./authMiddleware");

// Gets all trips
router.get("/", (req, res) => {
  Model.getTrips()
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error retrieving the trips." });
    });
});

// Gets trip by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Model.findTripById(id)
    .then(trip => {
      if (trip) {
        res.status(200).json(trip);
      } else {
        res
          .status(404)
          .json({ message: "The trip with the specified ID does not exist." });
      }
    })
    .catch(error => {
      res
        .status(404)
        .json({ message: "The trip with the specified ID does not exist." });
    });
});

// Adds new trip =====EXTRA=====
router.post("/", authenticate, (req, res) => {
  const trip = req.body;

  Model.addTrip(trip)
    .then(trip => {
      res.status(201).json(trip);
    })
    .catch(error => {
      console.log(error);
      res
        .status(500)
        .json({ message: "There was an error adding the new trip." });
    });
});

// edit trip
router.put("/:id", authenticate, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Model.updateTrip(changes, id)
    .then(trip => {
      if (trip) {
        res.status(200).json(trip);
      } else {
        res
          .status(404)
          .json({ message: "The trip with the specified ID does not exist." });
      }
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error modifying the trip." });
    });
});

// delete trip
router.delete("/:id", authenticate, (req, res) => {
  const { id } = req.params;

  Model.removeTrip(id)
    .then(trip => {
      if (trip) {
        res.status(200).json(trip);
      } else {
        res
          .status(404)
          .json({ message: "The trip with the specified ID does not exist." });
      }
    })
    .catch(error => {
      res.status(500).json({ error: "There was an error deleting the trip." });
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
