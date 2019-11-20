require('dotenv').config();

const mysql = {
  database: {
    default: {
      host: process.env.DB_HOST, // database host
      user: process.env.DB_USER, // your database username
      password: process.env.DB_PASS, // your database password
      port: process.env.DB_PORT, // default MySQL port
      db: process.env.DB_DB, // your database name
    },
    log: {
      host: process.env.DB_LOG_HOST, // database host
      user: process.env.DB_LOG_USER, // your database username
      password: process.env.DB_LOG_PASSWORD, // your database password
      port: process.env.DB_LOG_PORT, // default MySQL port
      db: process.env.DB_LOG_DB, // your database name
    },

  },
};

module.exports = mysql;
