import React from 'react';
import a12 from '/Projects/assignment-xii.web.app_.png'
import a11 from '../../../public/Projects/localhost_5174_ (1).png'
import a10 from '../../../public/Projects/assignment-10-d597b.web.app_.png'
import bg from '../../../public/BG/close-up-image-programer-working-his-desk-office.jpg'
// import px from '/Projects/_import_61557a2fa7fd98.46035599_FPpreview.mp4'
import './projects.css'
import { FaChrome, FaGithub, FaGithubSquare } from 'react-icons/fa';



const Projects = () => {
    return (
        <div className=' mt-10'>



            {/* <video loop autoPlay muted id='bg-video'>
            <source src={('public/Projects/_import_61557a2fa7fd98.46035599_FPpreview.mp4')} type='video/mp4' />
          </video> */}


            <div className="hero bg-fixed min-h-screen" style={{ backgroundImage: `url("/BG/close-up-image-programer-working-his-desk-office.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-blue-50">
                        <h1 className='text-center text-3xl font-semibold my-10'> Recent Projects</h1>
                        <div className='flex content my-20'>

                            <div className='w-1/2 '>
                                <h1 className='text-center text-2xl font-medium'>Athlete Escape</h1>
                                <p className='text-lg px-7 py-5'>Online Course Enrollment system, having different dashboard all three types of users. Furthermore, in this web application there is a difference types of security layers</p>
                                <div className='text-start'>
                                    <li>Purchase Courses</li>
                                    <li>Payment with card</li>
                                    <li>Different Dashboard for admin, instructor and student</li>
                                    <li>Login with Google</li>
                                    <li>Mobile Responsive</li>
                                </div>
                                <div className='flex justify-evenly my-5'>
                                    <div className='flex items-center gap-3'><FaChrome className='text-2xl'></FaChrome> <a href="">Live Link</a></div>
                                    <div className='flex items-center gap-3'><FaGithub className='text-2xl'></FaGithub> <a href="">Github Link</a></div>
                                    <div className='flex items-center gap-3'><FaGithubSquare className='text-2xl'></FaGithubSquare> <a href="">Server Link</a></div>
                                </div>

                            </div>
                            <div className='w-1/2 '>


                                <div className="container rounded-md">
                                    <div className="row rounded-md">

                                        <div className="col-md-4 col-md-offset-4 content rounded-md ">
                                            <div className="screen shadow-md rounded-md ">
                                                <img className='rounded-md' src={a12} />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='flex flex-row-reverse my-20'>

                            <div className='w-1/2'>
                                <h1 className='text-center text-2xl font-medium'>Wheels & Thrills </h1>
                                <p className='text-lg px-7 py-5'>Web application for treading toy car item.</p>
                                <div className='text-start'>
                                    <li>Add New Toy.</li>
                                    <li>Update Toy info & Remove Toy.</li>
                                    <li>Sorting, searching operation.</li>
                                    <li>Login with Google</li>
                                    <li>Mobile Responsive</li>
                                </div>
                                <div className='flex justify-evenly my-5'>
                                    <div className='flex items-center gap-3'><FaChrome className='text-2xl'></FaChrome> <a href="">Live Link</a></div>
                                    <div className='flex items-center gap-3'><FaGithub className='text-2xl'></FaGithub> <a href="">Github Link</a></div>
                                    <div className='flex items-center gap-3'><FaGithubSquare className='text-2xl'></FaGithubSquare> <a href="">Server Link</a></div>
                                </div>

                            </div>
                            <div className='w-1/2 '>


                                <div className="container rounded-md">
                                    <div className="row rounded-md">

                                        <div className="col-md-4 col-md-offset-4 content rounded-md ">
                                            <div className="screen1 shadow-md rounded-md ">
                                                <img className='rounded-md' src={a11} />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='flex content my-20'>

                            <div className='w-1/2'>
                                <h1 className='text-center text-2xl font-medium'>Chef's Pro</h1>
                                <p className='text-lg px-7 py-5'>Website about professional Chefs of Bangladesh and their detailes.</p>
                                <div className='text-start'>
                                    <li>Professional Chefs and their details</li>
                                    <li>Top recipes and methods</li>
                                    <li>Mark Favorite recipes</li>
                                    <li>Login with Google and Github</li>
                                    <li>Download QNA as PDF</li>
                                </div>
                                <div className='flex justify-evenly my-5'>
                                    <div className='flex items-center gap-3'><FaChrome className='text-2xl'></FaChrome> <a href="">Live Link</a></div>
                                    <div className='flex items-center gap-3'><FaGithub className='text-2xl'></FaGithub> <a href="">Github Link</a></div>
                                    <div className='flex items-center gap-3'><FaGithubSquare className='text-2xl'></FaGithubSquare> <a href="">Server Link</a></div>
                                </div>

                            </div>
                            <div className='w-1/2 '>


                                <div className="container rounded-md">
                                    <div className="row rounded-md">

                                        <div className="col-md-4 col-md-offset-4 content rounded-md ">
                                            <div className="screen2 shadow-md rounded-md ">
                                                <img className='rounded-md' src={a10} />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>





                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;