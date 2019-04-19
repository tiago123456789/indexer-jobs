"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserDao = require("../dao/UserDao");

var _UserDao2 = _interopRequireDefault(_UserDao);

var _User = require("../collections/User");

var _User2 = _interopRequireDefault(_User);

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _AuthFailedException = require("../exceptions/AuthFailedException");

var _AuthFailedException2 = _interopRequireDefault(_AuthFailedException);

var _NotFoundException = require("../exceptions/NotFoundException");

var _NotFoundException2 = _interopRequireDefault(_NotFoundException);

var _MessageException = require("../exceptions/MessageException");

var _MessageException2 = _interopRequireDefault(_MessageException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserBo = function () {
    function UserBo(dao) {
        _classCallCheck(this, UserBo);

        this._userDao = dao || new _UserDao2.default();
    }

    _createClass(UserBo, [{
        key: "findById",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                var user;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log(id);
                                _context.next = 3;
                                return this._userDao.findById(id);

                            case 3:
                                user = _context.sent;

                                if (user) {
                                    _context.next = 6;
                                    break;
                                }

                                throw new _NotFoundException2.default(_MessageException2.default.CODE_MESSAGE.NOT_FOUND);

                            case 6:
                                return _context.abrupt("return", user);

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function findById(_x) {
                return _ref.apply(this, arguments);
            }

            return findById;
        }()
    }, {
        key: "update",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id, dataModified) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.findById(id);

                            case 2:
                                this._userDao.update(id, dataModified);

                            case 3:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function update(_x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return update;
        }()
    }, {
        key: "authenticate",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(credencials) {
                var user, isPasswordValid;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this._userDao.getUserByEmail(credencials.email);

                            case 2:
                                user = _context3.sent;

                                if (user) {
                                    _context3.next = 5;
                                    break;
                                }

                                throw new _AuthFailedException2.default(_MessageException2.default.CODE_MESSAGE.AUTH_FAILED);

                            case 5:
                                _context3.next = 7;
                                return _bcrypt2.default.compare(credencials.password, user.password);

                            case 7:
                                isPasswordValid = _context3.sent;

                                if (isPasswordValid) {
                                    _context3.next = 10;
                                    break;
                                }

                                throw new _AuthFailedException2.default(_MessageException2.default.CODE_MESSAGE.AUTH_FAILED);

                            case 10:

                                user.password = "";
                                return _context3.abrupt("return", user);

                            case 12:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function authenticate(_x4) {
                return _ref3.apply(this, arguments);
            }

            return authenticate;
        }()
    }, {
        key: "save",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(newData) {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return this._userDao.save(newData);

                            case 2:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function save(_x5) {
                return _ref4.apply(this, arguments);
            }

            return save;
        }()
    }]);

    return UserBo;
}();

exports.default = UserBo;