const checkAuthenticated = (request, response, next) => {
    const user = request.session.user;
    const url = request.url;
    const routesPublics = ["/", "/user/login", "/user/register"];

    const isRoutePublic = (routesPublics.indexOf(url) > -1 ? true : false);
    if (isRoutePublic || user) {
        return next();
    }

    return response.redirect("/user/login");
}

export { checkAuthenticated };