import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubCalendar = () => {
    return (
        <div className=''>

            <div className='container mx-auto'>
                <h1>Github Contributions</h1>
                <GitHubCalendar username="sifat-e-sadakin" />

            </div>

        </div>
    );
};

export default GithubCalendar;