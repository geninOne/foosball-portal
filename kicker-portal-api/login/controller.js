
function logIn(req, res) {
  res.send('Here logIn ');
}

function logOut(req, res) {
  res.send('Here logOut ');
}

function isUserLoggedIn(req, res) {
  res.send('Here isUserLoggedIn ');
}

module.exports.logIn = logIn;
module.exports.logOut = logOut;
module.exports.isUserLoggeIn = isUserLoggedIn;