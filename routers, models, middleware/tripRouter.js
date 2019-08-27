const router = require("express").Router();

const Model = require("./model");

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
router.post("/", (req, res) => {
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
router.put("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
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
//     "title": "a trip", (string, max 255)
//     "description": "a description", (string, max 4000char)
//     "professional": false, (boolean, defaults to false)
//     "duration": "3 months", (string, max 255char)
//     "date": "a date", (string, max 255char)
//     "location": "a location", (string, max 255char)
//     "image": "an image" (string)
// }

// {
//   "title": "a trip",
//   "description": "a description",
//   "professional": false,
//   "duration": "3 months",
//   "date": "a date",
//   "location": "a location",
//   "image": "an image"
// }
