import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Banner from '../Component/Banner';
import About from '../Component/About';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;