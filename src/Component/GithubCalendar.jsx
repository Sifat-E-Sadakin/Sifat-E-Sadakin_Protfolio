import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubCalendar = () => {
    return (
        <div className=''>

            <div className=''>
                <div className="hero bg-fixed h-96" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/abstract-geometric-computer-wallpaper-white-border-connecting-dots-digital-technology-vector-design_53876-160227.jpg?w=1380&t=st=1687896194~exp=1687896794~hmac=0f83b015a76b78194195a50753392ce0b361f23bd1fe4ef3b5d37d63e1318ec2")` }}>
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