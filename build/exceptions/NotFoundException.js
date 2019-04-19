"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MessageException = require("./MessageException");

var _MessageException2 = _interopRequireDefault(_MessageException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotFoundException() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    this.code = "NOT_FOUND";
    this.message = message;
}

NotFoundException.prototype = Error.prototype;

exports.default = NotFoundException;