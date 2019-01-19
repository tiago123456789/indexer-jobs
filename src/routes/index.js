import express from "express";
import routesLanding from "./Landing";
import routesUser from "./User";

export default (app) => {

    app.use("/", routesLanding(express.Router()));
    app.use("/user", routesUser(express.Router()));
    
}