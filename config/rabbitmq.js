require('dotenv').config();

const rabbitmq = process.env.RABBITMQ_URL;

module.exports = rabbitmq;