"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jobSchema = new _mongoose2.default.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true },
    empresa: { type: String, required: true },
    salario: _mongoose2.default.Schema.Types.Mixed,
    description: String,
    job_id: Number
});

exports.default = _mongoose2.default.model("job", jobSchema);