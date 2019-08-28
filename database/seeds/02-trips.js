exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("trips").insert([
    {
      title: "Taj Mahal",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan, to house the tomb of his favourite wife, Mumtaz Mahal. It also houses the tomb of Shah Jahan, the builder.",
      professional: false,
      duration: "5 days",
      date: "2/12/19",
      location: "Agra, India",
      image: "https://unsplash.com/photos/mNFlngSAQUg",
      user_id: 1
    },
    {
      title: "Great Sphinx of Giza",
      description:
        "The Great Sphinx of Giza, commonly referred to as the Sphinx of Giza or just the Sphinx, is a limestone statue of a reclining sphinx, a mythical creature with the body of a lion and the head of a human. Facing directly from West to East, it stands on the Giza Plateau on the west bank of the Nile in Giza, Egypt.",
      professional: true,
      duration: "2 days",
      date: "4/16/19",
      location: "Giza, Egypt",
      image: "https://unsplash.com/photos/QtuCQC6k_uE",
      user_id: 1
    },
    {
      title: "Glacier Point",
      description:
        "Glacier Point is a viewpoint above Yosemite Valley in the U.S. state of California. It is located on the south wall of Yosemite Valley at an elevation of 7,214 feet, 3,200 feet above Half Dome Village.",
      professional: true,
      duration: "8 hours",
      date: "7/11/19",
      location: "Yosemite National Park, California",
      image: "https://unsplash.com/photos/HrUwIKrmPm0",
      user_id: 2
    },
    {
      title: "Old Faithful",
      description:
        "Old Faithful is a cone geyser located in Yellowstone National Park in Wyoming, United States. It was named in 1870 during the Washburn-Langford-Doane Expedition and was the first geyser in the park to receive a name. It is a highly predictable geothermal feature, and has erupted every 44 to 125 minutes since 2000.",
      professional: false,
      duration: "4 hours",
      date: "6/15/19",
      location: "Yellowstone National Park, Wyoming",
      image: "https://unsplash.com/photos/oN3U95O4cag",
      user_id: 2
    },
    {
      title: "Logan Pass Rafting",
      description:
        "Logan Pass is located along the Continental Divide in Glacier National Park, in the U.S. state of Montana. It is the highest point on the Going-to-the-Sun Road. The pass is named after Major Willian R. Logan, the first superintendent of the park.",
      professional: true,
      duration: "1 day",
      date: "3/15/19",
      location: "Glacier National Park, Montana",
      image: "https://unsplash.com/photos/THsw2pd2gX0",
      user_id: 3
    },
    {
      title: "Diamond Head",
      description:
        "Diamond Head is a volcanic tuff cone on the Hawaiian island of Oʻahu and known to Hawaiians as Lēʻahi. The Hawaiian name is most likely derived from lae plus ʻahi because the shape of the ridgeline resembles the shape of a tuna's dorsal fin.",
      professional: true,
      duration: "10 hours",
      date: "8/10/19",
      location: "Honolulu, Hawaii",
      image: "https://unsplash.com/photos/7yKgU0xemJw",
      user_id: 3
    }
  ]);
};
