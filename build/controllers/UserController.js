"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserBo = require("../bo/UserBo");

var _UserBo2 = _interopRequireDefault(_UserBo);

var _MessageException = require("../exceptions/MessageException");

var _MessageException2 = _interopRequireDefault(_MessageException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function () {
    function UserController(bo) {
        _classCallCheck(this, UserController);

        this._bo = bo || new _UserBo2.default();
        this._messageException = new _MessageException2.default();
        this.save = this.save.bind(this);
        this.authenticate = this.authenticate.bind(this);
        this.show = this.show.bind(this);
        this.update = this.update.bind(this);
        this.loadPageEdit = this.loadPageEdit.bind(this);
        this.logout = this.logout.bind(this);
        this.loadPageLogin = this.loadPageLogin.bind(this);
        this.loadPageEdit = this.loadPageEdit.bind(this);
    }

    _createClass(UserController, [{
        key: "loadPageLogin",
        value: function loadPageLogin(request, response) {
            return response.render("user/login");
        }
    }, {
        key: "loadPageRegister",
        value: function loadPageRegister(request, response) {
            return response.render("user/register");
        }
    }, {
        key: "logout",
        value: function logout(request, response) {
            request.session.destroy(function () {
                return response.redirect("/");
            });
        }
    }, {
        key: "authenticate",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response) {
                var _request$body, email, password, user;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _request$body = request.body, email = _request$body.email, password = _request$body.password;
                                _context.next = 4;
                                return this._bo.authenticate({ email: email, password: password });

                            case 4:
                                user = _context.sent;

                                request.session.user = user;
                                return _context.abrupt("return", response.redirect("/"));

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context["catch"](0);
                                return _context.abrupt("return", response.json({ msg: _context.t0.message }));

                            case 12:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 9]]);
            }));

            function authenticate(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return authenticate;
        }()
    }, {
        key: "save",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response) {
                var newData;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                newData = request.body;
                                _context2.next = 3;
                                return this._bo.save(newData);

                            case 3:
                                return _context2.abrupt("return", response.redirect("/user/login"));

                            case 4:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function save(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return save;
        }()
    }, {
        key: "show",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, response) {
                var user;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this._bo.findById(this._getIdUserAuthenticated(request));

                            case 2:
                                user = _context3.sent;

                                user.password = "";
                                return _context3.abrupt("return", response.render("user/show", { user: user }));

                            case 5:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function show(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return show;
        }()
    }, {
        key: "update",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(request, response) {
                var datasModified;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                datasModified = request.body;
                                _context4.next = 3;
                                return this._bo.update(this._getIdUserAuthenticated(request), datasModified);

                            case 3:
                                response.redirect("/");

                            case 4:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function update(_x7, _x8) {
                return _ref4.apply(this, arguments);
            }

            return update;
        }()
    }, {
        key: "loadPageEdit",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(request, response) {
                var user;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return this._bo.findById(this._getIdUserAuthenticated(request));

                            case 2:
                                user = _context5.sent;

                                user.password = "";
                                return _context5.abrupt("return", response.render("user/edit", { user: user }));

                            case 5:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function loadPageEdit(_x9, _x10) {
                return _ref5.apply(this, arguments);
            }

            return loadPageEdit;
        }()
    }, {
        key: "_getIdUserAuthenticated",
        value: function _getIdUserAuthenticated(request) {
            var _id = request.session.user._id;

            return _id;
        }
    }]);

    return UserController;
}();

exports.default = UserController;