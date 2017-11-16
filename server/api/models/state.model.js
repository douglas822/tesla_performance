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
