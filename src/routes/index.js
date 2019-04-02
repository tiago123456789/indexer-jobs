import express from "express";
import routesLanding from "./Landing";
import routesUser from "./User";
import routesJob from "./Job";

export default (app) => {

    app.use("/", routesLanding(express.Router()));
    app.use("/user", routesUser(express.Router()));
    app.use("/job", routesJob(express.Router()));
}