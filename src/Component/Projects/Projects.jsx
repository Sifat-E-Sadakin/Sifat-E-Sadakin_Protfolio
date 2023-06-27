import React from 'react';
import p1 from '/Projects/assignment-xii.web.app_.png'
import bg from '../../../public/BG/close-up-image-programer-working-his-desk-office.jpg'
// import px from '/Projects/_import_61557a2fa7fd98.46035599_FPpreview.mp4'
import './projects.css'


const Projects = () => {
    return (
        <div className=' my-10'>



            {/* <video loop autoPlay muted id='bg-video'>
            <source src={('public/Projects/_import_61557a2fa7fd98.46035599_FPpreview.mp4')} type='video/mp4' />
          </video> */}


            <div className="hero bg-fixed min-h-screen" style={{ backgroundImage: `url("/BG/close-up-image-programer-working-his-desk-office.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="text-blue-50">
                        <h1 className='text-center text-3xl font-semibold my-10'> Recent Projects</h1>
                        <div className='flex content'>

                            <div className='w-1/2'>
                                <h1 className='text-center text-2xl font-medium'>Athlete Escape</h1>
                                <p className='text-lg px-7 py-5'>Online Course Enrollment system, having different dashboard all three types of users. Furthermore, in this web application there is a difference types of security layers</p>
                            </div>
                            <div className='w-1/2 '>
                                {/* <div className=''>
                        <img src={p1} alt="" />
                    </div> */}

                                <div className="container rounded-md">
                                    <div className="row rounded-md">

                                        <div className="col-md-4 col-md-offset-4 content rounded-md ">
                                            <div className="screen shadow-md rounded-md ">
                                                <img className='rounded-md' src={p1} />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className='flex content'>

                            <div className='w-1/2'>
                                <h1 className='text-center text-2xl font-medium'>Athlete Escape</h1>
                                <p className='text-lg px-7 py-5'>Online Course Enrollment system, having different dashboard all three types of users. Furthermore, in this web application there is a difference types of security layers</p>
                            </div>
                            <div className='w-1/2 '>
                                {/* <div className=''>
                                    <img src={p1} alt="" />
                              </div> */}

                                <div className="container rounded-md">
                                    <div className="row rounded-md">

                                        <div className="col-md-4 col-md-offset-4 content rounded-md ">
                                            <div className="screen shadow-md rounded-md ">
                                                <img className='rounded-md' src={p1} />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='flex content'>

                            <div className='w-1/2'>
                                <h1 className='text-center text-2xl font-medium'>Athlete Escape</h1>
                                <p className='text-lg px-7 py-5'>Online Course Enrollment system, having different dashboard all three types of users. Furthermore, in this web application there is a difference types of security layers</p>
                            </div>
                            <div className='w-1/2 '>
                                {/* <div className=''>
                                    <img src={p1} alt="" />
                              </div> */}

                                <div className="container rounded-md">
                                    <div className="row rounded-md">

                                        <div className="col-md-4 col-md-offset-4 content rounded-md ">
                                            <div className="screen shadow-md rounded-md ">
                                                <img className='rounded-md' src={p1} />
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