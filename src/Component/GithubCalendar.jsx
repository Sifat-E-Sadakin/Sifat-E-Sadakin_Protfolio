import React from 'react';
import GitHubCalendar from 'react-github-calendar';


const GithubCalendar = () => {
    return (
        <div className=''>

            <div className=''>
                <div className="hero bg-fixed h-96" style={{ backgroundImage: `url("/BG/abstract-geometric-computer-wallpaper-white-border-connecting-dots-digital-technology-vector-design.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>

                    <div className="hero-content text-center text-neutral-content flex flex-col">
                    <h1 className='text-3xl text-center font-semibold my-10'>Github Contributions</h1>
                        <GitHubCalendar username="sifat-e-sadakin" />

                    </div>
                </div>

            </div>

        </div>
    );
};

export default GithubCalendar;