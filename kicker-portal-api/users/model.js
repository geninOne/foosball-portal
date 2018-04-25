const sequelize = require('../db');
const Sequelize = require('sequelize');
const seeds = require('./seeds.js');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name'
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name'
  },
  password: {
    type: Sequelize.STRING
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
  User.sync({force: true}).then(() => Promise.all(seeds.map(seed => User.create(seed))));
}

module.exports = User;
