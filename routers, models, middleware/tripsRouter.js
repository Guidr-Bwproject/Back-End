const router = require("express").Router();

const Model = require("./model");

// Gets all trips
router.get("/", async (req, res) => {
  try {
    const trips = await Model.getTrips();
    res.status(200).json(trips);
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an error retrieving the trips." });
  }
});

// Gets trip by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const trip = await Model.findTripById(id);
    if (trip) {
      res.status(200).json(trip);
    } else {
      res
        .status(404)
        .json({ message: "The trip with the specified ID does not exist." });
    }
  } catch (error) {
    res.status(500).json({
      message: "There was an error retrieving the trip with the specified ID."
    });
  }
});

// Adds new trip =====EXTRA=====
router.post("/", async (req, res) => {
  const trip = req.body;

  try {
    const newTrip = await Model.addTrip(trip);
    res.status(201).json(newTrip);
  } catch (error) {
    res
      .status(500)
      .json({ message: "There was an error adding the new trip." });
  }
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
