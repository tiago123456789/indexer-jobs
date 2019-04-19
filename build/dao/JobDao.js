"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Dao2 = require("./Dao");

var _Dao3 = _interopRequireDefault(_Dao2);

var _Job = require("../collections/Job");

var _Job2 = _interopRequireDefault(_Job);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JobDao = function (_Dao) {
    _inherits(JobDao, _Dao);

    function JobDao() {
        _classCallCheck(this, JobDao);

        return _possibleConstructorReturn(this, (JobDao.__proto__ || Object.getPrototypeOf(JobDao)).call(this, _Job2.default));
    }

    _createClass(JobDao, [{
        key: "getEnterprisesGreatherQuantityJobs",
        value: function getEnterprisesGreatherQuantityJobs() {
            var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

            return _Job2.default.aggregate([{ $group: {
                    _id: '$empresa',
                    total_job: { $sum: 1 }
                } }]).sort({ "total_job": "desc" }).limit(limit);
        }
    }, {
        key: "insertMany",
        value: function insertMany(newRegisters) {
            return _Job2.default.insertMany(newRegisters);
        }
    }]);

    return JobDao;
}(_Dao3.default);

exports.default = JobDao;