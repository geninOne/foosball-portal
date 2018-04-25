const jwt = require('jsonwebtoken');
const passport = require('passport');


function logIn(req, res) {
  
  passport.authenticate('local', {session: false}, (err, user, info) => {
    
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user: user
      });
    }
    
    req.login(user, {session: false}, (err) => {
      
      if (err) {
        res.send(err);
      }
      
      const token = jwt.sign(user, 'your_jwt_secret');
      res.header('x-kicker-jwt', token);
      
      return res.json(user);
      
    });
    
  })(req, res);
}

function logOut(req, res) {
  res.send('Here logOut '); 
}

function isTokenValid(req, res) {
  res.send('Here isUserLoggedIn ');
}

module.exports.logIn = logIn;
module.exports.logOut = logOut;
module.exports.isTokenValid = isTokenValid;