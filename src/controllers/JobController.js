import JobBo from "../bo/JobBo";
import Pager from "../lib/Pager";

export default class JobController {

    constructor() {
        this._bo = new JobBo();
        this.index = this.index.bind(this);
        this.getEnterprisesGreatherQuantityJobs = this.getEnterprisesGreatherQuantityJobs.bind(this);
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

    async getEnterprisesGreatherQuantityJobs(request, response, next) {
        try {
            const jobs = await this._bo.getEnterprisesGreatherQuantityJobs();
            const labels = jobs.map(job => job._id);
            const datas = jobs.map(job => job.total_job);
            response.json({ labels, datas });
        } catch(error) {
            next(error);
        }
    }
}