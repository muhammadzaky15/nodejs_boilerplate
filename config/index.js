const mysql = require('@config/mysql.js');
const server = require('@config/server.js');
const redis = require('@config/redis.js');
const rabbitmq = require('@config/rabbitmq.js');

const config = {
  mysql,
  server,
  redis,
  rabbitmq,
};

module.exports = config;
