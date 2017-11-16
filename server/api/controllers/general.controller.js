const rp = require('request-promise');

function getToken(req, res) {
  const options = {
    method: 'POST',
    uri: 'https://owner-api.teslamotors.com/oauth/token',
    body: req.body,
    json: true // Automatically stringifies the body to JSON
  };

  rp(options)
      .then(function (parsedBody) {
          res.json(parsedBody);
      })
      .catch(function (err) {
          res.status(500).json({ message: 'Unauthorized Client!' });
  });
}

function vehicleList(req, res) {
  var options = {
    method:'GET',
    uri: 'https://owner-api.teslamotors.com/api/1/vehicles',
    headers: {
      'Authorization': req.headers.authorization
    }
  };

  rp(options)
      .then(function (parsedBody) {
          res.json(parsedBody);
      })
      .catch(function (err) {
          res.status(500).json({ message: 'Something went wrong when bring vehicle list' });
  });

  }
module.exports = {
  getToken,
  vehicleList,
};
