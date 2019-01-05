export default (router) => {

    router.get("/", (request, response) => {
        return response.render("index.ejs");
    });

    return router;
}