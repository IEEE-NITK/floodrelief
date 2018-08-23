var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var requesteeSchema = new Schema({
    district: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    for_others: {
        type: Boolean,
        required: true,
    },
    gps_coordinates: {
        type: String,
        required: true,
    },
    gps_accuracy: {
        type: Number,
        required: true,
    },
    need_rescue: {
        type: Boolean,
    },
    need_rescue_details: {
        type: String,
    },
    water: {
        type: Boolean,
    },
    water_details: {
        type: String,
    },
    food: {
        type: Boolean,
    },
    food_details: {
        type: String,
    },
    clothing: {
        type: Boolean,
    },
    clothing_details: {
        type: String,
    },
    medicine: {
        type: Boolean,
    },
    medicine_details: {
        type: String,
    },
    utensils: {
        type: Boolean,
    },
    utensils_details: {
        type: String,
    },
    toiletries: {
        type: Boolean,
    },
    toiletries_details: {
        type: String,
    },
    other_needs: {
        type: String,
    },
    status: {
        type: Boolean,
        required: true,
    },
    supply_details: {
      type: String, 
    },
    date_added: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Requestee', requesteeSchema);