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
import Footer from '../Component/Footer';
import Awards from '../Component/Awards';


const Home = () => {
    return (
        <div className=''>
       
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <GithubCalendar></GithubCalendar>
            <Awards></Awards>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;