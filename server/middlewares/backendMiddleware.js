// set up backend
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('../api/routes');

module.exports = (app, cb) => {
  mongoose.Promise = global.Promise;
  mongoose.connect("mongodb://Afterhours:GWQ4]HNdhMQQue4yc@ds157325.mlab.com:57325/tesla_db", (error) => {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
      throw error;
    }
    console.log('Connected to MongoDB'); // eslint-disable-line

    if (typeof cb === 'function') {
      cb();
    }
  });

  app.use(bodyParser.json({ limit: '20mb' }));
  app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));
  app.use('/api', apiRoutes);
};

//////
