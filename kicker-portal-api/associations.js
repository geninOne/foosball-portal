const User = require('./users').model;
const UserSeeds = require('./users').seeds;
const Team = require('./teams').model;
const TeamSeeds = require('./teams').seeds;
const Match = require('./matches').model;
const MatchSeeds = require('./matches').seeds;


if (process.env.DB_SEED && false) {
  User.sync({force: true}).then(() => Promise.all(UserSeeds.map(seed => User.create(seed))));
  Team.sync({force: true}).then(() => Promise.all(TeamSeeds.map(seed => Team.create(seed))));
  Match.sync({force: true}).then(() => Promise.all(MatchSeeds.map(seed => Match.create(seed))));
} else {
  
  // Team
  Team.belongsTo(User, {as: 'user1'});
  Team.belongsTo(User, {as: 'user2'});
  
  Team.hasMany(Match, {as: 'MatchesAsUser1', foreignKey: 'team1Id', sourceKey: 'id'});
  Team.hasMany(Match, {as: 'MatchesAsUser2', foreignKey: 'team2Id', sourceKey: 'id'});
  
  // User
  User.hasMany(Team, {as: 'TeamsAsUser1', foreignKey: 'user1Id', sourceKey: 'id'});
  User.hasMany(Team, {as: 'TeamsAsUser2', foreignKey: 'user2Id', sourceKey: 'id'});
  
  // Matches
  Match.belongsTo(Team, {as: 'team1'});
  Match.belongsTo(Team, {as: 'team2'});
  Match.belongsTo(User, {as: 'matchOwner'});
  
  User.sync({force: false}).then(() => console.log('Users on synch'));
  Team.sync({force: false}).then(() => console.log('Teams on synch'));
  Match.sync({force: false}).then(() => console.log('Matches on synch'));
}