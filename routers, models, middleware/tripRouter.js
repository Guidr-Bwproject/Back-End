const router = require("express").Router();

const tripModel = require("./tripModel");
const authenticate = require("./authMiddleware");

// ================= GET ALL TRIPS =================
router.get("/", (req, res) => {
  tripModel
    .getTrips()
    .then(trips => {
      res.status(200).json(trips);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error retrieving the trips." });
    });
});

// ================= GET TRIP BY ID =================
router.get("/:id", (req, res) => {
  const { id } = req.params;

  tripModel
    .findTripById(id)
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

// ================= ADD TRIP =================
router.post("/", authenticate, (req, res) => {
  const trip = req.body;

  tripModel
    .addTrip(trip)
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

// ================= EDIT TRIP =================
router.put("/:id", authenticate, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  tripModel
    .updateTrip(changes, id)
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

// ================= DELETE TRIP =================
router.delete("/:id", authenticate, (req, res) => {
  const { id } = req.params;

  tripModel
    .removeTrip(id)
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
