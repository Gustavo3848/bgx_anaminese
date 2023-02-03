const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'piruli55_admin_bgx',
      password : 'Sarevok2@',
      database : 'piruli55_bgx'
    }
  });
module.exports = knex
  