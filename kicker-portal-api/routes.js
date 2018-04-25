


module.exports = (app) => {
  
  require('./users').routes(app);
  require('./logIn').routes(app);
  
  app.get('/', (req, res) => res.send('Hello World!'));
  
}