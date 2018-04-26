const Match = require('./model');
const User = require('../users').model;
const Team = require('../teams').model;

function list(req, res) {
  Match
    .findAll({
      attributes: ['id', 'score1', 'score2', 'createdAt', 'updatedAt'],
      include: [ 
        { 
          model: User, 
          as: 'matchOwner',
          attributes: ['id', 'firstName', 'lastName']
        },
        {
          model: Team, 
          as: 'team1',
          attributes: ['id'],
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
        },
        {
          model: Team, 
          as: 'team2',
          attributes: ['id'],
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
        }
      ]
    })
    .then(matches => {
      res.send(matches);
    })
  
}

module.exports.list = list;