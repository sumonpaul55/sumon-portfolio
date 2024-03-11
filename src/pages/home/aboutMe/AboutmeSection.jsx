import React from 'react';
import sumon from "../../../assets/sumon.png"
import "./about.css"
const AboutmeSection = () => {
    return (
        <section className='py-20 bg-slate-700'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7'>
                    <div className='text-center flex justify-center order-1 md:order-none overflow-hidden' data-aos="fade-right">
                        <div className='relative border rounded-lg w-fit p-3 border-double border-slate-800 m-2 pb-0'>
                            <img src={sumon} alt="Sumon Paul" />
                            <div className='space-y-[4px] dotted-animation overflow-hidden absolute right-2 md:-right-5 animate-spin'>
                                <div className='border-dotted border-slate-400 w-12 border-t-4'></div>
                                <div className='border-dotted border-slate-400 w-12 border-t-4'></div>
                                <div className='border-dotted border-slate-400 w-12 border-t-4'></div>
                                <div className='border-dotted border-slate-400 w-12 border-t-4'></div>
                                <div className='border-dotted border-slate-400 w-12 border-t-4'></div>
                                <div className='border-dotted border-slate-400 w-12 border-t-4'></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='space-y-10 p-2' data-aos="fade-left">
                            <h1 className='text-white font-bold mt-5 font-sans text-2xl md:text-3xl lg:text-4xl border-b w-fit pb-2 border-dashed'>About me</h1>
                            <div className='text-white space-y-8 max-w-[500px]'>
                                <p className='leading-relaxed'> <span className='text-xl'>Hello there!</span> I am Sumon Chandra Paul, a dedicated front-end web developer from in the charming city of Mymensingh, Bangladesh. My expertise in the realm of React.js and a diverse array of front-end technologies, and I am eagerly expanding my skills to embrace the full-stack developer role.</p>
                                <p className='leading-relaxed'>Besides, I have Completed BBA (Bachelors of Business Administration) And now I am studing (MBA) Masters of Business Administration as well. </p>
                                <p className='leading-relaxed'>Beyond the screen, I am a perpetual learner, always eager to explore emerging technologies and stay ahead of industry trends. This insatiable curiosity keeps my skills sharp and my approach innovative.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutmeSection;