import JobDao from "../dao/JobDao";

export default class JobBo {

    constructor() {
        this._bo = new JobDao();
    }

    async findAllPaginated(pageCurrent, qtdItensReturned = 10) {
        return await this.findAllPaginated(pageCurrent, qtdItensReturned);
    }

    insertMany(newRegisters) {
        return this._bo.insertMany(newRegisters);
    }
}