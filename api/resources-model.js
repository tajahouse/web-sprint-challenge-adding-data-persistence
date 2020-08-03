const db = require("../data/db-config.js");

const getResources = () => {
  return db("resources");
};

const addResource = data => {
  return db("resources")
    .insert(data, "id")
    .then(dataId => {
      const [id] = dataId;

      return db("resources")
        .where({ id })
        .first()
        .then(resource => {
          return resource;
        });
    });
};

module.exports = {
  getResources,
  addResource
};