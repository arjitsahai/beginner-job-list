var fetch = require('node-fetch');

const baseURL = 'https://jobs.github.com/positions.json';

export default async function fetchGithub() {
    const jobs = await fetch(baseURL);
    console.log({ jobs });
}