import * as AuthMiddleware from "../middlewares/AuthMiddleware";
import Crawler from "../services/Crawler";
import Pager from "../lib/Pager";

export default (router) => {

    router.get("/", async (request, response, next) => {
        try {
            const page = parseInt(request.query.page) || Pager.pageInitial;
            const jobs = await new Crawler().getContent(page);
            response.render("job/index", { 
                pagePrevious: Pager.getPagePrevious(page),
                jobs: jobs,
                pageNext: Pager.getPageNext(page)
            });
        } catch(e) {
            next(e);
        }

    
    });

    router.get("/:id/details", AuthMiddleware.checkAuthenticated, (request, response) => response.render("job/detail"));
    
    return router;
}