const DBService = require('@common/services/db.common.service.js');

class UserModel{
  constructor(){
    this.dbService = new DBService();
  }

  async index(){
    const query = `select * from users`;
    return await this.dbService.query(query);
  }

  async getById(id){
    const query = `select * from users where id=?`;
    return await this.dbService.query(query, id);
  }
}

module.exports = UserModel;