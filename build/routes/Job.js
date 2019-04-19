"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AuthMiddleware = require("../middlewares/AuthMiddleware");

var AuthMiddleware = _interopRequireWildcard(_AuthMiddleware);

var _JobController = require("../controllers/JobController");

var _JobController2 = _interopRequireDefault(_JobController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var jobController = new _JobController2.default();

exports.default = function (router) {

    router.get("/", jobController.index);
    router.get("/enterprises-greather-quantity-job", jobController.getEnterprisesGreatherQuantityJobs);

    return router;
};