import UserController from "../controllers/UserController";
import * as AuthMiddleware from "../middlewares/AuthMiddleware";

const userController = new UserController();

export default (router) => {

    router.get("/show", AuthMiddleware.checkAuthenticated, userController.show);
    router.get("/login", userController.loadPageLogin);
    router.post("/register", userController.save);
    router.post("/login", userController.authenticate);
    router.get("/logout", AuthMiddleware.checkAuthenticated, userController.logout);
    router.get("/register", userController.loadPageRegister);
    router.put("/edit", AuthMiddleware.checkAuthenticated, userController.update);
    router.get("/edit", AuthMiddleware.checkAuthenticated,userController.loadPageEdit);
    

    return router;
}