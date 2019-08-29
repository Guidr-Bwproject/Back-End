exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").insert([
    {
      username: "joepro",
      password: "imapro",
      email: "joeisapro@gmail.com",
      title: "Tour Guide",
      tagline: "I specialize in taking people for tours all around the world!",
      age: 32,
      time_as_guide: "8 years"
    }
  ]);
};
