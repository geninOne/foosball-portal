const bodyParser = require('body-parser');
const controller = require('./controller');

module.exports = (app) => {
  
  app.post('/logIn', bodyParser.json(), (req, res) => controller.logIn(req, res));
  app.delete('/logOut', (req, res) => controller.logOut(req, res));
  app.get('/isUserLoggedIn', (req, res) => controller.isTokenValid(req, res));
  
}

