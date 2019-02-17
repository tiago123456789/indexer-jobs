import UserController from "../controllers/UserController";

const userController = new UserController();

export default (router) => {

    router.get("/login", (request, response) => {
        return response.render("user/login.ejs");
    });

    router.get("/logout", (request, response) => {
        request
            .session
            .destroy(() => response.redirect("/"));
    });

    router.post("/login", userController.authenticate);

    router.get("/register", (request, response) => {
        return response.render("user/register.ejs");
    });

    router.post("/register", userController.save);

    return router;
}