const db = require("./database/db-config");

module.exports = {
  add,
  findBy
};

function getUserTrips(user_id) {}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
