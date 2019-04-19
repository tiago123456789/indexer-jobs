import JobDao from "../dao/JobDao";

export default class JobBo {

    constructor() {
        this._dao = new JobDao();
    }

    async findAllPaginated(pageCurrent, qtdItensReturned = 10) {
        return await this._dao.findAllPaginated(pageCurrent, qtdItensReturned);
    }

    getEnterprisesGreatherQuantityJobs(limitEnterprisesReturned = 5) {
        return this._dao.getEnterprisesGreatherQuantityJobs(limitEnterprisesReturned);
    }

    insertMany(newRegisters) {
        return this._dao.insertMany(newRegisters);
    }
}