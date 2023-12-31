import React from 'react';
import { Bounce, Fade, Flip, Hinge, Roll } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram, FaMailBulk } from 'react-icons/fa';

import TextTransition, { presets } from 'react-text-transition';


const TEXTS = ['MERN Stack Development ', 'Full Stack Development ',];
const TEXTS1 = ['Python', 'JAVA ', 'C++'];

const Banner = () => {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div id='home' className='relative bottom-20 md:pt-20'>
            <Helmet>
                <title>Sifat-E-Sadakin | Portfolio</title>

            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("/BG/89781.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="  flex flex-col-reverse md:flex-row  justify-center md:gap-32 items-center ">
                        <div className='text-3xl text-left max-w-lg space-y-7  '>
                          <Fade>
                          <div>
                                <span >Hi, I am <br /> </span><span className='text-5xl font-semibold'>Sifat-E-Sadakin <br /></span> <span className='text-xl'>looking for an opportunity to do some of my practical knowledge. In addition to this, I am really good at <br />
                                    <TextTransition className='font-semibold text-white' inline springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>. Besides, I also do programming in <TextTransition className='font-semibold text-white' inline springConfig={presets.gentle} delay={700}>{TEXTS1[index % TEXTS1.length]}</TextTransition>.</span>
                            </div>
                            <div className='flex gap-10'>
                                <a href="https://github.com/sifat-e-sadakin" target='_blank'><FaGithub></FaGithub></a>
                                <a href="https://www.linkedin.com/in/sifat-e-sadakin-4414b91a6/" target='_blank'><FaLinkedinIn></FaLinkedinIn></a>
                                <a href="https://www.facebook.com/profile.php?id=100007217809134" target='_blank'><FaFacebook></FaFacebook></a>
                                <a href="https://www.instagram.com/sifat10/" target='_blank'><FaInstagram></FaInstagram></a>
                                <a href="mailto:sifatesadakin10@gmail.com" target='_blank'><FaMailBulk></FaMailBulk></a>
                            </div>
                            <div className='flex gap-7'>
                                <a className='btn ' href="https://drive.google.com/uc?export=download&id=1J582FG-v1Jsnzr1WD97wotpfd6p3FYKT" target='_blank'>Resume</a>
                                <a className='btn btn-outline border-white text-white' href="mailto:sifatesadakin10@gmail.com" target='_blank'>Contact</a>

                            </div>
                          </Fade>

                        </div>
                        <div className="max-w-xs pt-20">
                            <Bounce>
                                <img className='rounded-full' src="/BG/HRS06415-removebg.png" alt="" />
                            </Bounce>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;