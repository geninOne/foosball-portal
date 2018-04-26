const Team = require('./model');
const User = require('../users/model');
const Sequelize = require('sequelize');

function list(req, res) {
  Team
    .findAll({})
    .then(teams => {
      res.send(teams);
    })
  
}

module.exports.list = list;