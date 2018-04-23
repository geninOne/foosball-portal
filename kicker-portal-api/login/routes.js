

const controller = require('./controller');

module.exports = (app) => {
  
  app.post('/logIn', (req, res) => controller.logIn);
  app.delete('/logOut', (req, res) => controller.logIn);
  app.get('/isUserLoggedIn', (req, res) => controller.isUserLoggedIn);
  
}

