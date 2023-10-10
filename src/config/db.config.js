// const Pool = require('pg').Pool;
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: 'postgres',
//     port: 5432,
// });

// module.exports = {
//     pool,
// }
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "postgres",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

//   max: maximum number of connection in pool
//   min: minimum number of connection in pool
//   idle: maximum time, in milliseconds, that a connection can be idle before being released
//   acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
