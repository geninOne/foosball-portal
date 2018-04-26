const Team = require('./model');
const User = require('../users/model');
const Sequelize = require('sequelize');

function list(req, res) {
  Team
    .findAll({
      attributes: ['id', 'createdAt', 'updatedAt'],
      include: [ 
        { 
          model: User, 
          as: 'user1',
          attributes: ['id', 'firstName', 'lastName']
        },
        { 
          model: User, 
          as: 'user2',
          attributes: ['id', 'firstName', 'lastName']
        }
      ]
    })
    .then(teams => res.send(teams))
  
}

module.exports.list = list;