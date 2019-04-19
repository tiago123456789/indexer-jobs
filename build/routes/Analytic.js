"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AuthMiddleware = require("../middlewares/AuthMiddleware");

var AuthMiddleware = _interopRequireWildcard(_AuthMiddleware);

var _Job = require("../collections/Job");

var _Job2 = _interopRequireDefault(_Job);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (router) {

    router.get("/", function (request, response) {
        return response.render("analytics/index");
    });
    return router;
};