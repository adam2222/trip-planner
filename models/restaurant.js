const Sequelize = require('sequelize');
const db = require('./index.js').db;
const Place = require('./place');

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  }
})

Restaurant.belongsTo(Place);

module.exports = Restaurant;
