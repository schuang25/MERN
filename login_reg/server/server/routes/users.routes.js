const UserController = require("../controllers/users.controller");
const {authenticate} = require('../config/jwt.config');

module.exports = (app) => {
    app.post("/api/register", UserController.register);
    app.post("/api/login", UserController.login);
    app.get("/api/logout", UserController.logout);
    app.get("/api/users", UserController.findAll);
};