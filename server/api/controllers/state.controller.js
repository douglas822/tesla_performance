const State = require('../models/state.model');

function create(req, res) {
  const state = new State({
    autopark_state: req.body.autopark_state,
    autopark_state_v2: req.body.autopark_state_v2,
    autopark_style: req.body.autopark_style,
    car_type: req.body.car_type,
    car_version: req.body.car_version,
    dark_rims: req.body.dark_rims,
    exterior_color: req.body.exterior_color,
    odometer: req.body.odometer,
    perf_config: req.body.perf_config,
    rear_seat_type: req.body.rear_seat_type,
    roof_color: req.body.roof_color,
    seat_type: req.body.seat_type,
    vehicle_name: req.body.vehicle_name,
    wheel_type: req.body.wheel_type,
    vin: req.body.vin,
  });
  //console.log("This is the create state", state, typeof(state));
  state.save()
  .then((newState) => {
    res.json(newState);
  })
  .catch((err) => {
    //console.log("This is store car error ", err);
    res.status(500).json({message: 'Something went to wrong when saving vehicle state to the database' });
  });
}

module.exports = {
  create,
};
