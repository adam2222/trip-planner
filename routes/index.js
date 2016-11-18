const router = require('express').Router();
const Hotels = require('../models/hotel');
const Activities = require('../models/activity');
const Places = require('../models/place');
const Restaurants = require('../models/restaurant');

  router.get('/', function(req, res, next){
    var hotels = Hotels.findAll();
    var activities = Activities.findAll();
    var places = Places.findAll();
    var restaurants = Restaurants.findAll();

    Promise.all([hotels, activities, places, restaurants])
      .then(function(returnArray){
        res.render('index', { hotels: returnArray[0], activities: returnArray[1], places: returnArray[2], restaurants: returnArray[3] })
      })
  .catch(next);

  })


module.exports = router;
