import * as AuthMiddleware from "../middlewares/AuthMiddleware";
import Job from "../collections/Job";

export default (router) => {

    router.get("/", (request, response) => response.render("analytics/index"));
    return router;
}