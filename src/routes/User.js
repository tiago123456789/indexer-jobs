import UserController from "../controllers/UserController";

const userController = new UserController();

export default (router) => {

    router.get("/show", userController.show);
    router.get("/login", userController.loadPageLogin);
    router.post("/register", userController.save);
    router.post("/login", userController.authenticate);
    router.get("/logout", userController.logout);
    router.get("/register", userController.loadPageRegister);
    router.put("/edit", userController.update);
    router.get("/edit", userController.loadPageEdit);
    

    return router;
}