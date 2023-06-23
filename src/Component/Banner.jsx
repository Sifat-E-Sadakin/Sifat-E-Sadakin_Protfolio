import React from 'react';

const Banner = () => {
    return (
        <div className='relative bottom-20'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("/BG/89781.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex justify-center gap-32 items-center">
                        <div className='text-3xl text-left max-w-lg space-y-5 space-x-4 '>
                            <div>
                                <span >Hi, I am <br /> </span><span className='text-5xl font-semibold'>Sifat-E-Sadakin <br /></span> <span className='text-xl'>looking for an opportunity to do some of my practical knowledge. In addition to this, I am really good at
                                    MERN stack development. Besides, I also do programming in Python, java, and C++</span>
                            </div>
                            <a className='btn' href="https://drive.google.com/file/d/1J582FG-v1Jsnzr1WD97wotpfd6p3FYKT/view" target='_blank'>Resume</a>
                            <a className='btn btn-outline border-white text-white' href="mailto:sifatesadakin10@gmail.com" target='_blank'>Contact</a>
                        </div>
                        <div className="max-w-xs ">
                            <img className='rounded-full' src="/BG/HRS06415-removebg.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;