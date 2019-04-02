const checkAuthenticated = (request, response, next) => {
    const user = request.session.user;
    if (user) {
        return next();
    }

    return response.redirect("/user/login");
}

export { checkAuthenticated };