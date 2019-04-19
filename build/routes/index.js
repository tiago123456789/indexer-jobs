"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _Landing = require("./Landing");

var _Landing2 = _interopRequireDefault(_Landing);

var _User = require("./User");

var _User2 = _interopRequireDefault(_User);

var _Job = require("./Job");

var _Job2 = _interopRequireDefault(_Job);

var _Analytic = require("./Analytic");

var _Analytic2 = _interopRequireDefault(_Analytic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

    app.use("/", (0, _Landing2.default)(_express2.default.Router()));
    app.use("/user", (0, _User2.default)(_express2.default.Router()));
    app.use("/job", (0, _Job2.default)(_express2.default.Router()));
    app.use("/analytic", (0, _Analytic2.default)(_express2.default.Router()));
};