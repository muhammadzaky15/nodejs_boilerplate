const db = require('@common/db/common.db.js');
// const rabbitqmq = require('@common/broker/common.broker.js');
// const redis = require('@common/redis/common.redis.js');


const getTasks = async () => {
  const pool = await db.createConnection('default');

  const result = await pool.query('SELECT * from tasks');

  if (!result[0].length < 1) {
    console.log('Tasks is not found');
  }

  return result[0][0];
};

getTasks();
