"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (next) {
    var user = this;
    var hash = _bcrypt2.default.hashSync(user.password, _Constantes2.default.SALT_ROUND);
    user.password = hash;
    next();
};

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _Constantes = require("../../config/Constantes");

var _Constantes2 = _interopRequireDefault(_Constantes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }