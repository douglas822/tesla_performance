const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const stateSchema = new Schema({
  vin: {type: String, default: '' },
  autopark_state: { type: String, required: true, default: '' },
  autopark_state_v2: { type: String, required: true, default: '' },
  autopark_style: { type: String, required: true, default: '' },
  car_type: { type: String, required: true, default: '' },
  car_version: { type: String, required: true, default: null },
  dark_rims:  { type: Boolean, required: true, default: null },
  exterior_color: { type: String, required: true, default: '' },
  odometer: { type: Number, required: true, default: null },
  perf_config:  { type: String, default: '' },
  rear_seat_type:  { type: Number, required: true, default: 0 },
  roof_color:  { type: String, required: true, default: '' },
  seat_type:  { type: Number, required: true, default: 0 },
  vehicle_name: { type: String, required: true, default: '' },
  wheel_type: { type: String, required: true, default: '' }

});

module.exports = mongoose.model('State', stateSchema);
//
// "autopark_state": "unavailable",
// "autopark_state_v2": "ready",
// "autopark_style": "dead_man",
// "car_type": "models2",
// "car_version": "2017.42 a88c8d5",
// "dark_rims": false,
// "exterior_color": "Pearl",
// "odometer": 3822.434324,
// "perf_config": "P3",
// "rear_seat_type": 0,
// "roof_color": "Glass",
// "seat_type": 2,
// "vehicle_name": "Lord Vader",
// "wheel_type": "AeroTurbine19"
