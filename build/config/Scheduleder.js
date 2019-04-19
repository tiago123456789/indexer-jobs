"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cron = require("cron");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scheduleder = function () {
    function Scheduleder() {
        _classCallCheck(this, Scheduleder);

        this._tasks = [];
    }

    _createClass(Scheduleder, [{
        key: "execute",
        value: function execute() {
            var job = new _cron.CronJob('* * */23 * * *', function () {
                this._tasks.forEach(function (task) {
                    return task();
                });
            }.bind(this));
            job.start();
        }
    }, {
        key: "register",
        value: function register(task) {
            this._tasks.push(task);
        }
    }]);

    return Scheduleder;
}();

var scheduleder = new Scheduleder();

module.exports = scheduleder;