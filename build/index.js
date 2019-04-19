"use strict";

var _Server = require("./config/Server");

var _Server2 = _interopRequireDefault(_Server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT;
_Server2.default.listen(PORT, function () {
  return console.log("Server started on address: http://localhost:" + PORT);
});