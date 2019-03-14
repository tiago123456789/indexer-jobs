import express from "express";
import session from "express-session";
import methodOverride from "method-override";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import User from "../collections/User";
import routesApp from "../routes/index";
import { checkAuthenticated } from "../middlewares/AuthMiddleware";
import "./LoaderEnvironmentConfig";
import "./Database";

const app = express();
const PORT = process.env.PORT;

// Settings template engine.
app.set("views", path.join(__dirname, "../../views"));
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
    saveUninitialized: true
}));

// Settings middleware than logger http requests.
app.use(morgan('dev'));

// Settings directory files statics(assets).
app.use(express.static(path.join(__dirname, "../../public")))

// Setting middleware check user authenticated.
app.use(checkAuthenticated);


app.use((request, response, next) => {
    if (request.session.user) {
        app.locals.user = request.session.user;
    } else {
        app.locals.user = null;
    }
    next();
});

// Loader routes on application.
routesApp(app);


export default app;
