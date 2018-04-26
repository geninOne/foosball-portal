const User = require('./model');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

function list(req, res) {
  const query = req.query.q;
  const searchQuery = {
    where: {
      [Op.or]: [
        {
          firstName: {
            [Op.iLike]: `%${query}%`
          },
        },
        {
          lastName: {
            [Op.iLike]: `%${query}%`
          }
        },
        {
          email: {
            [Op.iLike]: `%${query}%`
          }
        }
      ]
    }
  };
  const findQuery = (query) ? searchQuery : {};
  User
    .findAll(findQuery)
    .then(users => {
      res.send(users);
    })
  
}

module.exports.list = list;