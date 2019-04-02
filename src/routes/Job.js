import * as AuthMiddleware from "../middlewares/AuthMiddleware";
export default (router) => {

    router.get("/", (request, response) => response.render("job/index"));
    router.get("/:id/details", AuthMiddleware.checkAuthenticated, (request, response) => response.render("job/detail"));
    
    return router;
}