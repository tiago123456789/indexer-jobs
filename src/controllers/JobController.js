import JobBo from "../bo/JobBo";
import Pager from "../lib/Pager";

export default class JobController {

    constructor() {
        this._bo = new JobBo();
        this.index = this.index.bind(this);
    }

    async index(request, response, next) {
        try {
            const page = parseInt(request.query.page) || Pager.pageInitial;
            const jobs = await this._bo.findAllPaginated(page);
            response.render("job/index", { 
                pagePrevious: Pager.getPagePrevious(page),
                jobs: jobs,
                pageNext: Pager.getPageNext(page)
            });
        } catch(error) {
            next(error);
        }
    }
}