const Sequelize = require('sequelize');
const db = require('./index.js').db;
const Place = require('./place');

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING
  },
  age_range: {
    type: Sequelize.STRING
  }
});

Activity.belongsTo(Place);

module.exports = Activity;
