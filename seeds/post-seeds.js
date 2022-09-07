const { Post } = require("../Models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    post_url: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    post_url: "https://nasa.gov/donec.json",
    id: 2,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    post_url:
      "https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx",
    id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
