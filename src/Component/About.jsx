import React from 'react';
import { Element, Link, animateScroll as scroll } from 'react-scroll';


const About = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className='container mx-auto   '>

            <Element name='about' className='pt-20' >
                <h1 className='text-center text-3xl font-semibold'>About </h1>
                
                <div className='flex flex-col md:flex-row'>
                    
                    <div className=' md:w-1/2'>
                    <div className='flex justify-center py-8'>
                            <h1 className='text-2xl font-semibold'>Summery</h1>


                        </div>
                        I just completed my graduation in B. Sc in CSE from Brac University. In addition, I also completed several courses
                        related to Web application development. Those courses were offered by The University of Michigan and Duke
                        University through Coursera. However, I am confident in my ability to contribute to the success of your team
                        because of my sound understanding of MongoDB, Express, React, and Node.js.
                    </div>
                    <div className='md:w-1/2 ps-12'>
                        <div className='flex justify-center py-8'>
                            <h1 className='text-2xl font-semibold'>Educational Qualification</h1>


                        </div>
                        <div >
                           <span> </span> <span>Brac University — B.Sc. in Computer Science & Engineering (CSE), 2019 - present</span>
                           <p>Milestone College - Higher Secondary Certificate, 2016 - 2018</p>
                           <p>Rani Bilash Moni Gov't Boys High School  - Secondary School Certificate, 2011 - 2016</p>
                        </div>


                    </div>
                </div>
            </Element>


        </div>
    );
};

export default About;