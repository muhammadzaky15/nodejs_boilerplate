const UserController = require('@user/controllers');

module.exports = (app) => {
  const userController = new UserController();

    app.route('/user')
      .get(userController.index);

      app.route("/apam").get((req, res) => {
        res.send("Hi Apa Aceh, pastikan lagi asdf!");
      });
      
};