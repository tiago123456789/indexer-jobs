"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Settings lib promise used mongoose.
_mongoose2.default.Promise = Promise;

// Settings connection database.
_mongoose2.default.connect(process.env.URL_DB, { useNewUrlParser: true });