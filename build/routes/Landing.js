"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (router) {

    router.get("/", function (request, response) {
        return response.render("index.ejs");
    });

    return router;
};