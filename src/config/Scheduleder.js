import { CronJob } from "cron";

class Scheduleder {

    constructor() {
        this._tasks = [];
    }

    execute() {
        const job = new CronJob('* * */23 * * *', function() {
            this._tasks.forEach(task => task());
        }.bind(this));
        job.start();
    }

    register(task) {
        this._tasks.push(task);
    }
}

const scheduleder = new Scheduleder();

module.exports = scheduleder;