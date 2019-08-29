exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          username: "joepro",
          password: "imapro",
          email: "joeisapro@gmail.com",
          title: "Tour Guide",
          tagline:
            "I specialize in taking people for tours all around the world!",
          age: 32,
          time_as_guide: "8 years"
        },
        {
          username: "amandapanda",
          password: "pandas",
          email: "amandalovespandas@gmail.com",
          title: "Park Guide",
          tagline:
            "Motivated to help individuals find the help or information they need about local national parks.",
          age: 27,
          time_as_guide: "2 years"
        },
        {
          username: "bravedave",
          password: "password123",
          email: "daveisbrave@gmail.com",
          title: "Outdoor Adventure Guide",
          tagline: "What are you waiting for? Let's go on an adventure!",
          age: 24,
          time_as_guide: "1 year"
        }
      ]);
    });
};
