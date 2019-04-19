import * as AuthMiddleware from "../middlewares/AuthMiddleware";
import JobController from "../controllers/JobController";

const jobController = new JobController();

export default (router) => {

    router.get("/", jobController.index);
    
    return router;
}