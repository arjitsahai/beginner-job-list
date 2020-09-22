import fetch from 'node-fetch';
import React from 'react';
import './App.css';
import Jobs from './Jobs';

const JOB_API_URL = 'http://localhost:3001';

const mockJobs = [
    { title: 'SE 1', company: 'Microsoft' },
    { title: 'SE 2', company: 'Google' },
    { title: 'SE 3', company: 'Facebook' }
]


async function fetchjobs(updateCb) {
    const res = await fetch(JOB_API_URL);
    const beginnerJobs = await res.json();
    updateCb(beginnerJobs);

    console.log({ beginnerJobs });
}

function App() {

    const [jobList, updateJobs] = React.useState([]);



    React.useEffect(() => {
        fetchjobs(updateJobs);
    })



    return ( <
        div className = "App" >
        <
        Jobs jobs = { jobList }
        / >

        <
        /div>
    );
}

export default App;