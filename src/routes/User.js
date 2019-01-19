export default (router) => {

    router.get("/login", (request, response) => {
        return response.render("user/login.ejs");
    });

    router.get("/register", (request, response) => {
        return response.render("user/register.ejs");
    })

    return router;
}