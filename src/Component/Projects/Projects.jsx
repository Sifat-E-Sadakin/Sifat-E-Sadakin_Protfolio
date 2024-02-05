import React from "react";
import a12 from "/Projects/assignment-xii.web.app_.jpg";
import a11 from "../../../public/Projects/localhost_5174_ (1).jpg";
import mcg from "../../../public/Projects/screencapture-meghnacloud-2024-02-05-14_35_09.png";
import a10 from "../../../public/Projects/assignment-10-d597b.web.app_.jpg";
import bg from "../../../public/BG/close-up-image-programer-working-his-desk-office.jpg";
// import px from '/Projects/_import_61557a2fa7fd98.46035599_FPpreview.mp4'
import "./projects.css";
import { FaChrome, FaGithub, FaGithubSquare } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import LazyLoad from "react-lazy-load";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Projects = () => {
  return (
    <div id="projects" className=" mt-20">
      {/* <video loop autoPlay muted id='bg-video'>
            <source src={('public/Projects/_import_61557a2fa7fd98.46035599_FPpreview.mp4')} type='video/mp4' />
          </video> */}

      <LazyLoad>
        <div
          className="hero  md:bg-fixed min-h-screen"
          style={{
            backgroundImage: `url("/BG/close-up-image-programer-working-his-desk-office.jpg")`,
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="text-blue-50">
              <h1 className="text-center text-3xl font-semibold my-10">
                {" "}
                Recent Projects
              </h1>
              <div
                data-aos="fade-up"
                className="flex flex-col md:flex-row content my-20  bg-black bg-opacity-30 hover:bg-opacity-60 p-10 rounded-lg">
                <div className="md:w-1/2 ">
                  <h1 className="text-center text-2xl font-medium">
                    Meghna Cloud
                  </h1>
                  <p className="text-lg px-7 py-5">
                    Bangladesh's First Indigenously Developed Tier-4 Cloud Data
                    Center Build your vision with our secured cloud computing
                    solutions
                  </p>
                  <div className="text-start">
                    <li>Purchase Courses</li>
                    <li>Payment with card</li>
                    <li>
                      Different Dashboard for admin, instructor and student
                    </li>
                    <li>Login with Google</li>
                    <li>Mobile Responsive</li>
                  </div>
                  <div className="flex justify-evenly my-5">
                    <div className="flex items-center gap-3">
                      <FaChrome className="text-2xl"></FaChrome>{" "}
                      <a href="https://meghnacloud.com/" target="_blank">
                        Live Link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 ">
                  <div className="container rounded-md">
                    <div className="row rounded-md">
                      <div className="col-md-4 col-md-offset-4 content rounded-md ">
                        <div className="screen-m shadow-md rounded-md ">
                          <img className="rounded-md" src={mcg} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col md:flex-row content my-20  bg-black bg-opacity-30 hover:bg-opacity-60 p-10 rounded-lg">
                <div className="md:w-1/2 ">
                  <h1 className="text-center text-2xl font-medium">
                    Athlete Escape
                  </h1>
                  <p className="text-lg px-7 py-5">
                    Online Course Enrollment system, having different dashboard
                    all three types of users. Furthermore, in this web
                    application there is a difference types of security layers
                  </p>
                  <div className="text-start">
                    <li>Purchase Courses</li>
                    <li>Payment with card</li>
                    <li>
                      Different Dashboard for admin, instructor and student
                    </li>
                    <li>Login with Google</li>
                    <li>Mobile Responsive</li>
                  </div>
                  <div className="flex justify-evenly my-5">
                    <div className="flex items-center gap-3">
                      <FaChrome className="text-2xl"></FaChrome>{" "}
                      <a href="https://assignment-xii.web.app/" target="_blank">
                        Live Link
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaGithub className="text-2xl"></FaGithub>{" "}
                      <a
                        href="https://github.com/Sifat-E-Sadakin/Athlete-Escapes"
                        target="_blank">
                        Github Link
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaGithubSquare className="text-2xl"></FaGithubSquare>{" "}
                      <a
                        href="https://github.com/Sifat-E-Sadakin/Athlete-Escapes-Server"
                        target="_blank">
                        Server Link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 ">
                  <div className="container rounded-md">
                    <div className="row rounded-md">
                      <div className="col-md-4 col-md-offset-4 content rounded-md ">
                        <div className="screen shadow-md rounded-md ">
                          <img className="rounded-md" src={a12} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-aos="fade-up"
                className="flex flex-col md:flex-row-reverse my-20  bg-black bg-opacity-30 hover:bg-opacity-60 p-10 rounded-lg">
                <div className="md:w-1/2">
                  <h1 className="text-center text-2xl font-medium">
                    Wheels & Thrills{" "}
                  </h1>
                  <p className="text-lg px-7 py-5">
                    Web application for treading toy car item.
                  </p>
                  <div className="text-start">
                    <li>Add New Toy.</li>
                    <li>Update Toy info & Remove Toy.</li>
                    <li>Sorting, searching operation.</li>
                    <li>Login with Google</li>
                    <li>Mobile Responsive</li>
                  </div>
                  <div className="flex justify-evenly my-5">
                    <div className="flex items-center gap-3">
                      <FaChrome className="text-2xl"></FaChrome>{" "}
                      <a
                        href="https://assignment-11-3bbbb.web.app/"
                        target="_blank">
                        Live Link
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaGithub className="text-2xl"></FaGithub>{" "}
                      <a
                        href="https://github.com/Sifat-E-Sadakin/Wheels-Thrills"
                        target="_blank">
                        Github Link
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaGithubSquare className="text-2xl"></FaGithubSquare>{" "}
                      <a
                        href="https://github.com/Sifat-E-Sadakin/Wheels-Thrills-Server"
                        target="_blank">
                        Server Link
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 ">
                  <div className="container rounded-md">
                    <div className="row rounded-md">
                      <div className="col-md-4 col-md-offset-4 content rounded-md ">
                        <div className="screen1 shadow-md rounded-md ">
                          <img className="rounded-md" src={a11} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div data-aos="fade-up" className='flex flex-col md:flex-row content my-20  bg-black bg-opacity-30 hover:bg-opacity-60 p-10 rounded-lg'>

                                <div className='md:w-1/2'>
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
                                        <div className='flex items-center gap-3'><FaChrome className='text-2xl'></FaChrome> <a href="https://assignment-10-d597b.web.app/" target='_blank'>Live Link</a></div>
                                        <div className='flex items-center gap-3'><FaGithub className='text-2xl'></FaGithub> <a href="https://github.com/Sifat-E-Sadakin/Chef-s-Pro" target='_blank'>Github Link</a></div>
                                        <div className='flex items-center gap-3'><FaGithubSquare className='text-2xl'></FaGithubSquare> <a href="https://github.com/Sifat-E-Sadakin/Chef-s-Pro-Server" target='_blank'>Server Link</a></div>
                                    </div>

                                </div>
                                <div className='md:w-1/2 '>


                                    <div className="container rounded-md">
                                        <div className="row rounded-md">

                                            <div className=" ">
                                                <div className="screen2 shadow-md rounded-md ">
                                                    <img className='rounded-md' src={a10} />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default Projects;
