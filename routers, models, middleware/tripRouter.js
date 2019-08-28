const router = require("express").Router();

const Model = require("./model");
const authenticate = require("./authMiddleware");

// =================GET ALL TRIPS=================
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

// =================GET TRIP BY ID=================
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

// =================ADD TRIP=================
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

// =================EDIT TRIP=================
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

// =================DELETE TRIP=================
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
//   "title": "a trip",
//   "description": "a description",
//   "professional": false,
//   "duration": "3 months",
//   "date": "a date",
//   "location": "a location",
//   "image": "an image",
//   "user_id": 1
// }
