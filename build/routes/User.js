"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UserController = require("../controllers/UserController");

var _UserController2 = _interopRequireDefault(_UserController);

var _AuthMiddleware = require("../middlewares/AuthMiddleware");

var AuthMiddleware = _interopRequireWildcard(_AuthMiddleware);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userController = new _UserController2.default();

exports.default = function (router) {

    router.get("/show", AuthMiddleware.checkAuthenticated, userController.show);
    router.get("/login", userController.loadPageLogin);
    router.post("/register", userController.save);
    router.post("/login", userController.authenticate);
    router.get("/logout", AuthMiddleware.checkAuthenticated, userController.logout);
    router.get("/register", userController.loadPageRegister);
    router.post("/edit", AuthMiddleware.checkAuthenticated, userController.update);
    router.get("/edit", AuthMiddleware.checkAuthenticated, userController.loadPageEdit);

    return router;
};