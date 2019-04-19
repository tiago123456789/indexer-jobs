"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _cheerio = require("cheerio");

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Crawler = function () {
    function Crawler() {
        _classCallCheck(this, Crawler);

        this._site = "https://hipsters.jobs/jobs/";
    }

    _createClass(Crawler, [{
        key: "execute",
        value: function execute() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15;

            return _axios2.default.get(this._site + ("?p=" + page)).then(function (response) {
                return response.data;
            }).then(function (jobsTextHTML) {
                var $ = _cheerio2.default.load(jobsTextHTML);
                var jobs = [];
                $(".listing-item__jobs").each(function (index, element) {
                    var row = $(element);
                    jobs.push({
                        title: row.find(".link").text(),
                        url: row.find(".link").attr("href"),
                        empresa: row.find(".listing-item__info--item-company").text().trim(),
                        salario: "",
                        description: row.find(".listing-item__desc").text().trim().replace(/\n/g, ""),
                        job_id: row.find(".link").attr("href").match(/\/([0-9]+)\//)[1]
                    });
                });

                return jobs;
            });
        }
    }]);

    return Crawler;
}();

module.exports = Crawler;