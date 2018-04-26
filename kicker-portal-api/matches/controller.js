const Match = require('./model');

function list(req, res) {
  Match
    .findAll()
    .then(matches => {
      res.send(matches);
    })
  
}

module.exports.list = list;