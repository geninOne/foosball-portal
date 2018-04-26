const sequelize = require('../db');
const Sequelize = require('sequelize');
const seeds = require('./seeds.js');

const Team = sequelize.define('team', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  user1: {
    type: Sequelize.BIGINT,
    field: 'user_1'
  },
  user2: {
    type: Sequelize.BIGINT,
    field: 'user_2'
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
  Team.sync({force: true}).then(() => Promise.all(seeds.map(seed => Team.create(seed))));
}

module.exports = Team;
