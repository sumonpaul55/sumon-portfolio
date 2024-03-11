import { Box, Container } from '@mui/material';
import React from 'react';
import me from "../../assets/me.png"
import resume from "../../assets/resume.pdf"
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <section className='bg-slate-800 text-white py-14 md:py-28'>
            <Container>
                <Box>
                    <div className='flex flex-col md:flex-row md:items-center gap-16 md:gap-5'>
                        <div className='text-center md:text-start md:w-1/2'>
                            <div data-aos="fade-right" className='overflow-hidden'>
                                <h2 className='text-xl md:text-3xl lg:text-4xl font-bold mb-6'>Hi, I am <span className='text-pink-500'>Sumon Chandra Paul</span></h2>
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        "I am, " + `Front end Developer`,
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        "I am, " + 'React js Developer',
                                        1000,
                                        "I am, " + 'Mern stack Developer',
                                        1000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    className='text-xl md:text-3xl font-bold'
                                    repeat={Infinity} />
                                <div className=''>
                                    <div className='my-10 border-slate-600 border max-w-[200px] mx-auto md:mx-0'></div>
                                    <p className='max-w-[400px] mx-auto md:mx-0 text-start'>As a React.js front-end developer, I excel in crafting dynamic websites with a keen emphasis on efficiency and a seamless user experience.</p>
                                    <div className='flex gap-4 md:gap-10 mt-5 justify-center md:justify-start'>
                                        <button className='px-4 lg:px-0 font-semibold lg:min-w-[200px] hover:bg-pink-800 duration-200 rounded-md bg-pink-600 py-1 md:py mt-5-2'>
                                            <a href={resume} download>Download Resume</a>
                                        </button>
                                        <button className='px-4 lg:px-0 font-semibold lg:min-w-[200px] hover:bg-pink-800 duration-200 rounded-md bg-pink-600 py-1 md:py mt-5-2'>
                                            <a href="https://drive.google.com/file/d/1ww5z3TermAyzInt3qPy-99dqFcKwp5AJ/view?usp=sharing" target='_blank' rel="noreferrer">View Resume</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center md:w-1/2 md:p-20'>
                            <div className='flex items-center justify-center rounded-full' data-aos="fade-left">
                                <img src={me} alt="sumon paul" className='border rounded-full p-1' />
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
        </section>
    );
};

export default Banner;