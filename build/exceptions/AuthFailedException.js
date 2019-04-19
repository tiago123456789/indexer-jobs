"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MessageException = require("./MessageException");

var _MessageException2 = _interopRequireDefault(_MessageException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AuthFailedException() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    this.code = "AUTH_FAILED";
    this.message = message;
}

AuthFailedException.prototype = Error.prototype;

exports.default = AuthFailedException;