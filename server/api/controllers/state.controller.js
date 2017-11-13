const State = require('../models/state.model');

function create(req, res, next) {
  const state = new State({
    autopark_state: req.body.autopark_state,
    autopark_state_v2: req.body.autopark_state_v2,
    autopark_style: req.body.autopark_style,
    car_type: req.body.car_type,
    car_version: req.body.car_version,
    dark_rims:  req.body.dark_rims,
    exterior_color: req.body.exterior_color,
    odometer: req.body.odometer,
    perf_config:  req.body.perf_config,
    rear_seat_type:  req.body.rear_seat_type,
    roof_color:  req.body.roof_color,
    seat_type:  req.body.seat_type,
    vehicle_name: req.body.vehicle_name,
    wheel_type: req.body.wheel_type,
    vin: req.body.vin,

  });
  state.save()
  .then((newState) => {
    res.json(newState);
  })
  .catch(next);
}

function list(req, res, next) {
  let where = {};
  State.find(where)
  .then((cars) => {
    res.json(cars);
  })
  .catch(next);
}



module.exports = {
  create,
  list
};
