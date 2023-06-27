import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Component/Banner';
import About from '../Component/About';
import Skills from '../Component/Skills';
import Projects from '../Component/Projects/Projects';
import GithubCalendar from '../Component/GithubCalendar';
import BgDesign from '../Component/BgDesign';
import Contact from '../Component/Contact';


const Home = () => {
    return (
        <div className=''>
       
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <GithubCalendar></GithubCalendar>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;