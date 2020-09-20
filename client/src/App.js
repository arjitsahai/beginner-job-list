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


async function fetchjobs() {
    const res = await fetch(JOB_API_URL);
    const beginnerJobs = await res.json();


    console.log({ beginnerJobs });
}

function App() {

    React.useEffect(() => {
        fetchjobs();
    })



    return ( <
        div className = "App" >
        <
        Jobs jobs = { mockJobs }
        / >

        <
        /div>
    );
}

export default App;