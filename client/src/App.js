import React from 'react';
import './App.css';
import Jobs from './Jobs';

const mockJobs = [
    { title: 'SE 1', company: 'Microsoft' }
]

function App() {
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