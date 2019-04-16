import Dao from "./Dao";
import Job from "../collections/Job";

export default class JobDao extends Dao {

    constructor() {
        super(Job);
    }

    insertMany(newRegisters) {
        return Job.insertMany(newRegisters);
    }

}
