exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      // check data
      tbl.increments();
      tbl.string("title", 255);
      tbl.string("tagline", 255);
      tbl.integer("age");
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
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trips").dropTableIfExists("users");
};
