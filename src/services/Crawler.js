import axios from "axios";
import cheerio from "cheerio";

class Crawler {

    constructor() {
        this._site = "https://hipsters.jobs/jobs/";
    }


    getContent(page) {
        return axios
            .get(this._site + `?p=${page}`)
            .then((response) => response.data)
            .then(jobsTextHTML => {
                const $ = cheerio.load(jobsTextHTML);
                const jobs = [];
                $(".listing-item__jobs").each((index, element) => {
                    const row = $(element);
                    jobs.push({
                        title: row.find(".link").text(),
                        url: row.find(".link").attr("href"),
                        empresa: row.find(".listing-item__info--item-company").text().trim(),
                        salario: "",
                        description: row.find(".listing-item__desc").text().trim().replace(/\n/g, ""),
                        job_id: row.find(".link").attr("href").match(/\/([0-9]+)\//)[1]
                    })
                })

                return jobs;
            });
    }
}

module.exports = Crawler;