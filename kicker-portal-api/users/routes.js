
const controller = require('./controller');

module.exports = (app) => {
  app.get('/users', (req, res) => controller.list);
}
