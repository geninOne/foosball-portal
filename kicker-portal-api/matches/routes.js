const bodyParser = require('body-parser');
const controller = require('./controller');
const passport = require('passport');

module.exports = (app) => {
  app.get('/matches', passport.authenticate('jwt', {session: false}), (req, res) => controller.list(req, res));
  app.post('/matches', passport.authenticate('jwt', {session: false}), bodyParser.json(), (req, res) => controller.add(req, res));
}
