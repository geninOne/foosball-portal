const User = require('./model');

function list(req, res) {
  User
    .findAll()
    .then(users => {
      res.send(users);
    })
  
}

module.exports.list = list;