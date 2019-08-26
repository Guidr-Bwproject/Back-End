const db = require("../database/db-config");

module.exports = {
  addUser,
  findBy,
  getTrips,
  addTrip
};

function findBy(filter) {
  return db("users").where(filter);
}

function addUser(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("users")
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
      return findById(id);
    });
}
