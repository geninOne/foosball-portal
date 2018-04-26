


module.exports = (app) => {
  
  require('./logIn').routes(app);
  require('./users').routes(app);
  require('./matches').routes(app);
  require('./teams').routes(app);
  
  app.get('/', (req, res) => res.send('Hello World!'));
  
}