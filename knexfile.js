module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/database.sqlite3"
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
    // pool: {
    //   afterCreate: (conn, done) => {
    //     // turns on the foreign key enforcement
    //     conn.run("PRAGMA foreign_keys = ON", done);
    //   }
    // }
  }
};
