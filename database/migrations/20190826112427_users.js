exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string("title");
    tbl.string("tagline").notNullable();
    tbl.integer("age");
    tbl
      .timestamp("created_at")
      .notNullable()
      .defaultTo(knex.raw("now()"));
    tbl
      .string("username", 255)
      .notNullable()
      .unique();
    tbl.string("password", 255).notNullable();
    tbl
      .string("email", 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
