const Car = require('../models/car.model');
const request = require('request');
const rp = require('request-promise');

function create(req, res, next) {
  const car = new Car({
    id: req.body.id,
    vehicle_id: req.body.vehicle_id,
    vin: req.body.vin,
    display_name: req.body.display_name,
    option_codes: req.body.option_codes,
    color: req.body.color,
    token: req.body.token,
    state: req.body.state,
    in_service: req.body.in_service,
     id_s: req.body.id_s,
     remote_start_enabled: req.body.remote_start_enabled,
     calendar_enabled: req.body.calendar_enabled,
     notifications_enabled: req.body.notifications_enabled,
     backseat_token: req.body.backseat_token,
     backseat_token_updated_at: req.body.backseat_token_updated_at
  });
  car.save()
  .then((newCar) => {
    //res.json(newCar);
  })
  .catch(next);

  var options = {
    method:'GET',
    uri: 'https://owner-api.teslamotors.com/api/1/vehicles/' + req.body.id_s + '/data_request/vehicle_state',
    headers: {
      'Authorization': req.headers.authorization
    }
  };

  rp(options)
      .then(function (parsedBody) {
          //console.log(parsedBody);
          res.json(parsedBody);
      })
      .catch(function (err) {
          res.status(500).json({ message: 'Something went wrong when bringing vehicle state'});
  });





}

function list(req, res, next) {
  let where = {};
  Car.find(where)
  .then((cars) => {
    res.json(cars);
  })
  .catch(next);
}



module.exports = {
  create,
  list
};
