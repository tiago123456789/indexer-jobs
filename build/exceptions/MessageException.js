"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageException = function () {
    function MessageException() {
        var _messagesBasedCode;

        _classCallCheck(this, MessageException);

        this._messagesBasedCode = (_messagesBasedCode = {}, _defineProperty(_messagesBasedCode, MessageException.CODE_MESSAGE.AUTH_FAILED, "Datas invalids!"), _defineProperty(_messagesBasedCode, MessageException.CODE_MESSAGE.NOT_FOUND, "Register not found!"), _messagesBasedCode);
    }

    _createClass(MessageException, [{
        key: "getMessage",
        value: function getMessage(code) {
            return this._messagesBasedCode[code] || "";
        }
    }]);

    return MessageException;
}();

MessageException.CODE_MESSAGE = {
    "AUTH_FAILED": "AUTH_FAILED",
    "NOT_FOUND": "NOT_FOUND"
};
exports.default = MessageException;