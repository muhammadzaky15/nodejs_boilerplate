const UserService = require('@user/services');

class UserController {
  constructor() {
    this.userService = new UserService();
    this.index = this.index.bind(this);
    this.getById = this.getById.bind(this);
  }

  async index(req, res) {
    res.send({
      data: await this.userService.index()
    });
  }

  async getById(req, res){
    res.send({
      data: await this.userService.getById(req.params.id)
    })
  }
}

module.exports = UserController;
