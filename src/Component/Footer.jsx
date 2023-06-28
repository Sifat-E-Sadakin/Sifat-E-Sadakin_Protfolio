import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaMailBulk, FaMobile, FaMobileAlt, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {

    const smoothScrollOptions = {
        duration: 500,  // Duration of the scroll animation in milliseconds
        smooth: true,  // Enable smooth scrolling
        offset: -50,  // Offset from the top of the section when scrolling
      };

    const scrollToTop = () => {
        scroll.scrollToTop(smoothScrollOptions);
    };


    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                <li><Link  spy={true} activeClass="active"   to='home' onClick={scrollToTop}>Home</Link></li>
        <li><Link activeClass="active" spy={true} smooth={true}  to='about' onClick={scrollToTop}>About</Link></li>
        <li><Link activeClass="active" spy={true} smooth={true}  to='skills' onClick={scrollToTop}>Skills</Link></li>
        <li><Link activeClass="active" spy={true} smooth={true}  to='projects' onClick={scrollToTop}>Projects</Link></li>
        <li><Link activeClass="active" spy={true} smooth={true}  to='contact' onClick={scrollToTop}>Contact</Link></li>
        <li></li>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-7 text-3xl">
                    <a href="https://github.com/sifat-e-sadakin" target='_blank'><FaGithub></FaGithub></a>
                                <a href="https://www.linkedin.com/in/sifat-e-sadakin-4414b91a6/" target='_blank'><FaLinkedinIn></FaLinkedinIn></a>
                                <a href="https://www.facebook.com/profile.php?id=100007217809134" target='_blank'><FaFacebook></FaFacebook></a>
                                <a href="https://www.instagram.com/sifat10/" target='_blank'><FaInstagram></FaInstagram></a>
                                <a href="mailto:sifatesadakin10@gmail.com" target='_blank'><FaMailBulk></FaMailBulk></a>
                    </div>
                    <div className='flex gap-7 pt-3'>
                        <div className='flex items-center gap-1'>
                            <FaPhoneAlt></FaPhoneAlt> +8801791507027
                            
                        </div>
                        <div className='flex items-center gap-1'>
                        <FaPhoneAlt></FaPhoneAlt> +8801644997904
                        </div>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2023 - All right reserved by Sifat-E-Sadakin</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;