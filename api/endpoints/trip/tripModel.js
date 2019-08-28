const db = require("../../../database/db-config");

module.exports = {
  getTrips,
  addTrip,
  findTripById,
  updateTrip,
  removeTrip
};

function getTrips() {
  return db("trips");
}

function findTripById(id) {
  return db("trips")
    .where({ id })
    .first();
}

function addTrip(trip) {
  return db("trips")
    .insert(trip)
    .then(ids => {
      const [id] = ids;
      return findTripById(id);
    });
}

function updateTrip(changes, id) {
  return db("trips")
    .where({ id })
    .update(changes);
}

function removeTrip(id) {
  return db("trips")
    .where({ id })
    .del();
}
