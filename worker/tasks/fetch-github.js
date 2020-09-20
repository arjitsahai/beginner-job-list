var fetch = require('node-fetch');

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.get).bind(client);

const baseURL = 'https://jobs.github.com/positions.json';


//fetch all jobs
async function fetchGithub() {
    let resultCount = 1,
        onPage = 0;
    const allJobs = [];

    while (resultCount > 0) {
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();
        allJobs.push(jobs);
        resultCount = jobs.length;
        console.log('got', resultCount, 'jobs');
        onPage++;
    }


    //filter jobs
    const beginnerJobs = allJobs.filter(job => {
        const jobTitle = job.title.toLowerCase();
        if (
            jobTitle.includes('senior') ||
            jobTitle.includes('sr') ||
            jobTitle.includes('manager')
        ) {
            return false;
        }
        return true;
    })

    console.log(beginnerJobs.length);


    //set in redis

    const success = await setAsync('github', JSON.stringify(beginnerJobs));

    console.log({ success });
}
fetchGithub();

module.exports = fetchGithub;