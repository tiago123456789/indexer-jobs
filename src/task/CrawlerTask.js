import Crawler from "../services/Crawler";
import JobBo from "../bo/JobBo";
import scheduleder from "../config/Scheduleder";

scheduleder.register(async () => {
    const jobs = await new Crawler().execute();
    new JobBo().insertMany(jobs);
});