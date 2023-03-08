const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '161.35.8.123',
      user : 'gustavo',
      password : 'l52V2&83Iroi',
      database : 'bgx'
    }
  });
module.exports = knex
  