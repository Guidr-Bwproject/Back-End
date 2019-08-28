const db = require("../database/db-config");

module.exports = {
  addUser,
  findUserBy
};

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
