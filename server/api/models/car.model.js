const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const carSchema = new Schema({
  id: { type: Number, required: true, default: null},
  vehicle_id: { type: Number, required: true, default: null },
  vin: {type: String, default: '' },
  display_name: { type: String, default: '' },
  option_codes: { type: String, required: true, default: '' },
  color: { type: String, default: null },
  tokens: [String],
  state: { type: String, required: true, default: '' },
  in_service: { type: String, default: null },
  id_s:  { type: String, required: true, default: '' },
  remote_start_enabled:  { type: Boolean, required: true, default: null },
  calendar_enabled:  { type: Boolean, required: true, default: null },
  notifications_enabled:  { type: Boolean, required: true, default: null },
  backseat_token: { type: Boolean, default: null },
  backseat_token_updated_at:  { type: String, default: null }
});

module.exports = mongoose.model('Car', carSchema);
