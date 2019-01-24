import express from "express";
import session from "express-session";
import methodOverride from "method-override";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import passport from "passport";
import { Strategy } from "passport-local";
import User from "../collections/User";
import routesApp from "../routes/index";
import "./LoaderEnvironmentConfig";
import "./Database";

const app = express();
const PORT = process.env.PORT;

// Settings template engine.
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

// Settings middlewares do parse data to json.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Settings middleware responsable override method(verb) http.
app.use(methodOverride("_method"));

// Settings session on application.
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.SESSION_COOKIE_SECURE }
}));

// Settings middlewares passport.
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Strategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Settings middleware than logger http requests.
app.use(morgan('dev'));

// Settings directory files statics(assets).
app.use(express.static(path.join(__dirname, "../public")))

// Loader routes on application.
routesApp(app);

export default app;
