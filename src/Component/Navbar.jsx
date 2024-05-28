import React from "react";
import "./Styles/styles.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowCircleDown } from "react-icons/fa";

const Navbar = () => {
  const smoothScrollOptions = {
    duration: 500, // Duration of the scroll animation in milliseconds
    smooth: true, // Enable smooth scrolling
    offset: -50, // Offset from the top of the section when scrolling
  };

  const scrollToTop = () => {
    scroll.scrollToTop(smoothScrollOptions);
  };

  let navItem = (
    <>
      <li>
        <Link spy={true} activeClass="active" to="home" onClick={scrollToTop}>
          Home
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          to="about"
          onClick={scrollToTop}>
          About
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          to="skills"
          onClick={scrollToTop}>
          Skills
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          to="projects"
          onClick={scrollToTop}>
          Projects
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          to="contact"
          onClick={scrollToTop}>
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="fixed w-full top-0 z-40">
      <div className=" bg-black bg-opacity-50 text-white  ">
        <div className="navbar container mx-auto    ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navItem}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case  text-xl">
              Sifat-E-Sadakin
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
          </div>
          <div className="navbar-end">
            <a
              className="btn btn-outline  "
              href="https://drive.google.com/uc?export=download&id=1J582FG-v1Jsnzr1WD97wotpfd6p3FYKT"
              target="_blank">
              Resume <FaArrowCircleDown></FaArrowCircleDown>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
