"use strict";

var _Crawler = require("../services/Crawler");

var _Crawler2 = _interopRequireDefault(_Crawler);

var _JobBo = require("../bo/JobBo");

var _JobBo2 = _interopRequireDefault(_JobBo);

var _Scheduleder = require("../config/Scheduleder");

var _Scheduleder2 = _interopRequireDefault(_Scheduleder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_Scheduleder2.default.register(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var jobs;
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return new _Crawler2.default().execute();

                case 2:
                    jobs = _context.sent;

                    new _JobBo2.default().insertMany(jobs);

                case 4:
                case "end":
                    return _context.stop();
            }
        }
    }, _callee, undefined);
})));