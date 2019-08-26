exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      // check data
      tbl.increments();
      tbl.string("title", 255).notNullable();
      tbl.string("tagline", 255).notNullable();
      tbl.integer("age").notNullable();
      // tbl.timestamp("created_at");
      // not sure how to implement
      tbl
        .string("username", 255)
        .unique()
        .notNullable();
      tbl.string("password", 255).notNullable();
      tbl
        .string("email", 255)
        .unique()
        .notNullable();
    })
    .createTable("trips", tbl => {
      tbl.increments();
      tbl.string("title", 255);
      tbl.string("description", 4000);
      tbl
        .boolean("professional")
        .defaultTo(false)
        .notNullable();
      tbl.string("time");
      tbl.string("date");
      tbl.string("location", 255);
      tbl.integer("price");
      tbl.string("image");
    })
    .createTable("user_trips", tbl => {
      tbl.increments();
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT") // check
        .onUpdate("CASCADE");
      tbl
        .integer("trip_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("trips")
        .onDelete("RESTRICT") // check
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("user_trips")
    .dropTableIfExists("trips")
    .dropTableIfExists("users");
};
