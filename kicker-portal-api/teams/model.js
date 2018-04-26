const sequelize = require('../db');
const Sequelize = require('sequelize');
const seeds = require('./seeds.js');

const Team = sequelize.define('team', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  user1Id: {
    type: Sequelize.BIGINT,
    field: 'user1_id'
  },
  user2Id: {
    type: Sequelize.BIGINT,
    field: 'user2_id'
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

module.exports = Team;
