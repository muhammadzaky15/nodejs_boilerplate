require('dotenv').config();

const server = {
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_PORT,
};

module.exports = server;
