import Dao from "./Dao";
import Job from "../collections/Job";

export default class JobDao extends Dao {

    constructor() {
        super(Job);
    }

    getEnterprisesGreatherQuantityJobs(limit = 5) {
        return Job.aggregate([
                    { $group: {
                        _id: '$empresa',
                        total_job: { $sum: 1 }
                    }},
                ])
                .sort({ "total_job": "desc" })
                .limit(limit);
    }

    insertMany(newRegisters) {
        return Job.insertMany(newRegisters);
    }

}
