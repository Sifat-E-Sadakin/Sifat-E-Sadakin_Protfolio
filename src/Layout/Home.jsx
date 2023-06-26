import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Component/Banner';
import About from '../Component/About';
import Skills from '../Component/Skills';
import Projects from '../Component/Projects/Projects';


const Home = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;