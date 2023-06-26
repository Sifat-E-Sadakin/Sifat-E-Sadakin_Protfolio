import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Component/Banner';
import About from '../Component/About';
import Skills from '../Component/Skills';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;