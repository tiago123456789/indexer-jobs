"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _JobBo = require("../bo/JobBo");

var _JobBo2 = _interopRequireDefault(_JobBo);

var _Pager = require("../lib/Pager");

var _Pager2 = _interopRequireDefault(_Pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JobController = function () {
    function JobController() {
        _classCallCheck(this, JobController);

        this._bo = new _JobBo2.default();
        this.index = this.index.bind(this);
        this.getEnterprisesGreatherQuantityJobs = this.getEnterprisesGreatherQuantityJobs.bind(this);
    }

    _createClass(JobController, [{
        key: "index",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response, next) {
                var page, jobs;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                page = parseInt(request.query.page) || _Pager2.default.pageInitial;
                                _context.next = 4;
                                return this._bo.findAllPaginated(page);

                            case 4:
                                jobs = _context.sent;

                                response.render("job/index", {
                                    pagePrevious: _Pager2.default.getPagePrevious(page),
                                    jobs: jobs,
                                    pageNext: _Pager2.default.getPageNext(page)
                                });
                                _context.next = 11;
                                break;

                            case 8:
                                _context.prev = 8;
                                _context.t0 = _context["catch"](0);

                                next(_context.t0);

                            case 11:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 8]]);
            }));

            function index(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return index;
        }()
    }, {
        key: "getEnterprisesGreatherQuantityJobs",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response, next) {
                var jobs, labels, datas;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return this._bo.getEnterprisesGreatherQuantityJobs();

                            case 3:
                                jobs = _context2.sent;
                                labels = jobs.map(function (job) {
                                    return job._id;
                                });
                                datas = jobs.map(function (job) {
                                    return job.total_job;
                                });

                                response.json({ labels: labels, datas: datas });
                                _context2.next = 12;
                                break;

                            case 9:
                                _context2.prev = 9;
                                _context2.t0 = _context2["catch"](0);

                                next(_context2.t0);

                            case 12:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 9]]);
            }));

            function getEnterprisesGreatherQuantityJobs(_x4, _x5, _x6) {
                return _ref2.apply(this, arguments);
            }

            return getEnterprisesGreatherQuantityJobs;
        }()
    }]);

    return JobController;
}();

exports.default = JobController;