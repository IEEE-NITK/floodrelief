var express = require('express');
var router = express.Router();
var Requestee = require('../models/requestee');

router.post('/request_help', requestHelp);
// router.get('/requests', requests);
// router.post('/update_request', updateRequest);

function requestHelp(request, response, next) {
  var body = request.body;
  var requesteeData = {
    district: body.district,
    location: body.location,
    name: body.name,
    phone: body.phone,
    for_others: body.for_others,
    gps_coordinates: body.gps_coordinates,
    gps_accuracy: body.gps_accuracy,
    need_rescue: body.need_rescue,
    need_rescue_details: body.need_rescue_details,
    water: body.water,
    water_details: body.water_details,
    food: body.food,
    food_details: body.food_details,
    clothing: body.clothing,
    clothing_details: body.clothing_details,
    medicine: body.medicine,
    medicine_details: body.medicine_details,
    utensils: body.utensils,
    utensils_details: body.utensils_details,
    toiletries: body.toiletries,
    toiletries_details: body.toiletries_details,
    other_needs: body.other_needs,
    status: false,
  }
  var newRequestee = Requestee(requesteeData);
  newRequestee.save(function(err, requestee){
    if (err) {
        response.status(500);
        response.send("DB Error: " + err + "\nBody: " + JSON.stringify(body));
    }
    else {
        response.send("New Requestee Added Successfully");
    }
  });
}

module.exports = router;