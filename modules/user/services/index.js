const UserModel = require('@user/models');

class UserService {
  constructor(){
    this.userModel = new UserModel();
  }

  async index(){
    return await this.userModel.index();
  }

  async getById(id){
    const data = await this.userModel.getById(id);

    if(data.length > 0){
      return data;
    }

    return "data kosong";
  }
}

module.exports = UserService;