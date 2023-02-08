const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'gustavo',
      password : 'l52V2&83Iroi',
      database : 'bgx'
    }
  });
module.exports = knex
  