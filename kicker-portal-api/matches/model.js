const sequelize = require('../db');
const Sequelize = require('sequelize');
const seeds = require('./seeds.js');

const Match = sequelize.define('match', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  matchOwner: {
    type: Sequelize.BIGINT,
    field: 'match_owner'
  },
  team1: {
    type: Sequelize.BIGINT,
    field: 'team_1'
  },
  team2: {
    type: Sequelize.BIGINT,
    field: 'team_2'
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

if (process.env.DB_SEED) {
  Match.sync({force: true}).then(() => Promise.all(seeds.map(seed => Match.create(seed))));
}

module.exports = Match;
