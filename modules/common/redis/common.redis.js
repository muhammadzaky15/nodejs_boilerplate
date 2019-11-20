const Redis = require("ioredis");
const config = require('@config').redis;

let redis = new Redis({
    port: config.port, // Redis port
    host: config.host, // Redis host
    family: config.family, // 4 (IPv4) or 6 (IPv6)
    password: config.password,
    db: 0
});

module.exports = redis