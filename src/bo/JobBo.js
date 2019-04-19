import JobDao from "../dao/JobDao";

export default class JobBo {

    constructor() {
        this._dao = new JobDao();
    }

    async findAllPaginated(pageCurrent, qtdItensReturned = 10) {
        return await this._dao.findAllPaginated(pageCurrent, qtdItensReturned);
    }

    insertMany(newRegisters) {
        return this._dao.insertMany(newRegisters);
    }
}