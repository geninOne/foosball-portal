const Match = require('./model');
const User = require('../users').model;
const Team = require('../teams').model;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

function add(req, res) {
  
  const Team1User1Id = req.body.team1.user1Id;
  const Team1User2Id = req.body.team1.user2Id;
  
  const Team2User1Id = req.body.team2.user1Id;
  const Team2User2Id = req.body.team2.user2Id;
  
  const score1 = req.body.score.team1;
  const score2 = req.body.score.team2;
  
  const team1Query = Team.findOrCreate({
    where: {
      [Op.and]: {
        user1Id: [Team1User1Id, Team1User2Id],
        user2Id: [Team1User1Id, Team1User2Id]
      }
    },
    defaults: {
      user1Id: Team1User1Id,
      user2Id: Team1User2Id
    }
  });
  
  const team2Query = Team.findOrCreate({
    where: {
      [Op.and]: {
        user1Id: [Team2User1Id, Team2User2Id],
        user2Id: [Team2User1Id, Team2User2Id]
      }
    },
    defaults: {
      user1Id: Team2User1Id,
      user2Id: Team2User2Id
    }
  });
  
  Promise.all([team1Query, team2Query]).then(teams => {
    const team1 = teams[0][0];
    const team2 = teams[1][0];
    return Match.create({
      matchOwnerId: req.user.id,
      team1Id: team1.id,
      team2Id: team2.id,
      score1: score1,
      score2: score2
    });
    
  })
  .then(match => {
    return Match
      .findOne({
        where: {
          id: match.id
        },
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
      });
  })
  .then(match => res.send(match))
  .catch(e => res.send(e));
}

module.exports.list = list;
module.exports.add = add;