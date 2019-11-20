require('module-alias/register');

const RedisConnection = require('@common/redis/common.redis');
const Logger = require('@lib-logger/internal.logger');
const CommonError = require('@common/errors/error.code.common');

class RedisCommonService {
  constructor(db = 0) {
    this.db = db;
    this.get = this.get.bind(this);
  }

  async get(key) {
    try {
      const redisConnection = new RedisConnection(this.db);
      const connection = await redisConnection.createConnection();
      const stringifiedData = await connection.get(key);
      const result = JSON.parse(stringifiedData);

      await redisConnection.closeConnection();

      return result;
    } catch (e) {
      Logger().warn(`RedisService Get : ${e}`);
    }

    return null;
  }

  async set(key, data, ttl) {
    try {
      const redisConnection = new RedisConnection(this.db);
      const connection = await redisConnection.createConnection();
      const stringifiedData = JSON.stringify(data);
      let result = null;

      if (ttl !== undefined) {
        result = await connection.set(key, stringifiedData, 'EX', ttl);
      } else {
        result = await connection.set(key, stringifiedData);
      }

      await redisConnection.closeConnection();

      return result;
    } catch (e) {
      Logger().warn(`RedisService Set : ${e}`);
    }

    return null;
  }

  async delete(key) {
    try {
      const redisConnection = new RedisConnection(this.db);
      const connection = await redisConnection.createConnection();
      await connection.del(key);

      await redisConnection.closeConnection();
    } catch (e) {
      Logger().warn(`RedisService Delete : ${e}`);
    }

    return null;
  }

  async check(key) {
    try {
      const redisConnection = new RedisConnection(this.db);
      const connection = await redisConnection.createConnection();
      const stringifiedData = await connection.get(key);
      const result = JSON.parse(stringifiedData);

      await redisConnection.closeConnection();

      return result;
    } catch (e) {
      Logger().warn(`RedisService Get : ${e}`);
      return { errorCode: CommonError.REDIS_CONNECTION_FAILED_MESSAGE };
    }
  }
}

module.exports = RedisCommonService;
