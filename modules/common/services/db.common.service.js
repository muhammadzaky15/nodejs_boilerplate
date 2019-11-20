require('module-alias/register');

// const Logger = require('@lib-logger/internal.logger');
const DBConnection = require('@common/db/common.db.js');

class DBCommonService {
  constructor(db = 'default') {
    this.db = db;
    this.dbConnection = new DBConnection();
  }

  async query(query, data = []) {
    // if (process.env.NODE_ENV !== 'production') {
    //   Logger().info(`DB Query : ${query} ${JSON.stringify(data)}`);
    // }

    try {
      const connection = await this.dbConnection.createConnection(this.db);
      try {
        const result = await connection.query(query, data);

        await this.dbConnection.closeConnection(connection);

        return result;
      } catch (ex) {
        await this.dbConnection.closeConnection(connection);

        // Logger().error(`MySQL Query Error : ${ex.code} - ${ex.sql}`);
        return { errorCode: ex.code };
      }
    } catch (ex) {
      // Logger().error(`MySQL Connection Error : ${ex.code}`);
      return { errorCode: ex.code };
    }
  }
}

module.exports = DBCommonService;
