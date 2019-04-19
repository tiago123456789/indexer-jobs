"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _expressSession = require("express-session");

var _expressSession2 = _interopRequireDefault(_expressSession);

var _methodOverride = require("method-override");

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _User = require("../collections/User");

var _User2 = _interopRequireDefault(_User);

var _index = require("../routes/index");

var _index2 = _interopRequireDefault(_index);

var _Scheduleder = require("./Scheduleder");

var _Scheduleder2 = _interopRequireDefault(_Scheduleder);

require("../task/index");

require("./LoaderEnvironmentConfig");

require("./Database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT;

// Settings template engine.
app.set("views", _path2.default.join(__dirname, "../views"));
app.set("view engine", "ejs");

// Settings middlewares do parse data to json.
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

// Settings middleware responsable override method(verb) http.
app.use((0, _methodOverride2.default)("_method"));

// Settings session on application.
app.use((0, _expressSession2.default)({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Settings middleware than logger http requests.
app.use((0, _morgan2.default)('dev'));

// Settings directory files statics(assets).
app.use(_express2.default.static(_path2.default.join(__dirname, "../public")));

app.use(function (request, response, next) {
    if (request.session.user) {
        app.locals.user = request.session.user;
    } else {
        app.locals.user = null;
    }
    next();
});

// Initialize scheduleder.
_Scheduleder2.default.execute();

// Loader routes on application.
(0, _index2.default)(app);

exports.default = app;