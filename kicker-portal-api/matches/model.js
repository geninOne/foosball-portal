const sequelize = require('../db');
const Sequelize = require('sequelize');
const seeds = require('./seeds.js');

const Match = sequelize.define('match', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  matchOwnerId: {
    type: Sequelize.BIGINT,
    field: 'match_owner_id'
  },
  team1Id: {
    type: Sequelize.BIGINT,
    field: 'team_1Id'
  },
  team2Id: {
    type: Sequelize.BIGINT,
    field: 'team_2Id'
  },
  score1: {
    type: Sequelize.SMALLINT,
    field: 'score_1'
  },
  score2: {
    type: Sequelize.SMALLINT,
    field: 'score_2'
  },
  createdAt: {
    type: Sequelize.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'updated_at'
  }
});

module.exports = Match;
