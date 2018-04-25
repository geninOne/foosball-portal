const controller = require('./controller');
const passport = require('passport');

module.exports = (app) => {
  app.get('/users', passport.authenticate('jwt', {session: false}), (req, res) => controller.list(req, res));
}
