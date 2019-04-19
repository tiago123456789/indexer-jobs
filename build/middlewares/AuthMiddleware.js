"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var checkAuthenticated = function checkAuthenticated(request, response, next) {
    var user = request.session.user;
    if (user) {
        return next();
    }

    return response.redirect("/user/login");
};

exports.checkAuthenticated = checkAuthenticated;