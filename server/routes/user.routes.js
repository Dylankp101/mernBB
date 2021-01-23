const UserController = require("../controllers/user.controller");

module.exports = app => {
  app.get("/api/users/", UserController.findAllUsers);
  app.get("/api/users/:id", UserController.findOneSingleUser);
  app.put("/api/users/update/:id", UserController.updateExistingUser);
  app.post("/api/user/new", UserController.createNewUser);
  app.delete("/delete/:id", UserController.deleteAnExistingUser);
};