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
                    <div className='py-10 md:w-1/2'>
                        I just completed my graduation in B. Sc in CSE from Brac University. In addition, I also completed several courses
                        related to Web application development. Those courses were offered by The University of Michigan and Duke
                        University through Coursera. However, I am confident in my ability to contribute to the success of your team
                        because of my sound understanding of MongoDB, Express, React, and Node.js.
                    </div>
                    <div className='md:w-1/2'>
                        <div className='flex justify-center py-8'>
                        <h1 className='text-2xl font-semibold'>More Information</h1>


                        </div>
                       

                    </div>
                </div>
            </Element>


        </div>
    );
};

export default About;