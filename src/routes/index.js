import express from "express";
import routesLanding from "./Landing.js";

export default (app) => {

    app.use("/", routesLanding(express.Router()));
}