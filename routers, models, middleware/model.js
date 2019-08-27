const db = require("../database/db-config");

module.exports = {
  addUser,
  findUserBy,
  getTrips,
  addTrip,
  findTripById,
  updateTrip,
  removeTrip
};

// ========== USERS ==========
function findUserBy(filter) {
  return db("users").where(filter);
}

function findUserById(id) {
  return db("users")
    .where({ id })
    .first();
}

function addUser(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findUserById(id);
    });
}

// ========== TRIPS ==========
function findTripById(id) {
  return db("trips")
    .where({ id })
    .first();
}

function getTrips() {
  return db("trips").select("id", "title", "description");
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
    .where({ id: id })
    .update(changes);
}

function removeTrip(id) {
  return db("trips")
    .where({ id: id })
    .del();
}

// function getUserTrips(id) {
//   return db('trips as t').innerJoin('users as u', )
// }
