import React from "react";
import { Element, Link, animateScroll as scroll } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const About = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="container mx-auto relative z-10   ">
      <Element name="about" className="pt-20">
        <h1 className="text-center text-3xl font-semibold">About </h1>

        <div className="flex flex-col md:flex-row">
          <div data-aos="fade-right" className=" md:w-1/2">
            <div className="flex justify-center py-8">
              <h1 className="text-2xl font-semibold">Summery</h1>
            </div>
            I just completed my graduation in B. Sc in CSE from Brac University.
            In addition, I also completed several courses related to Web
            application development. Those courses were offered by The
            University of Michigan and Duke University through Coursera.
            However, I am confident in my ability to contribute to the success
            of your team because of my sound understanding of MongoDB, Express,
            React, and Node.js.
          </div>
          <div data-aos="fade-left" className="md:w-1/2 ps-12">
            <div className="flex justify-center py-8">
              <h1 className="text-2xl font-semibold">
                Educational Qualification
              </h1>
            </div>
            <div>
              <span className="font-semibold"> Brac University </span>{" "}
              <span>
                {" "}
                — B.Sc. in Computer Science & Engineering (CSE), 2019 - present
              </span>
              <p>
                <span className="font-semibold">Milestone College</span> -
                Higher Secondary Certificate, 2016 - 2018
              </p>
              <p>
                <span className="font-semibold">
                  Rani Bilash Moni Gov't Boys High School
                </span>{" "}
                - Secondary School Certificate, 2011 - 2016
              </p>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default About;
