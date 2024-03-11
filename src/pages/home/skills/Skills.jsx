import React, { } from 'react';
import skills from "./skills.json"

const Skills = () => {
    // console.log(skills)

    return (
        <section className='py-32 bg-slate-700'>
            <div className="container mx-auto">
                <h1 className='text-white px-2 md:px-0 font-bold mt-5 font-sans text-2xl md:text-3xl lg:text-4xl border-b w-fit pb-2 border-dashed'>Coding Capabilities</h1>
                <div className='grid grid-cols-2 gap-1 md:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20'>
                    {skills?.map((skills, idx) => (
                        <div key={idx} className='shadow-lg rounded-lg bg-slate-100 border-slate-500 py-3 p-1 border overflow-hidden hover:scale-105 duration-200'>
                            <div className=' space-y-3 text-center' data-aos="fade-up">
                                <img src={skills.img} alt={skills.name} className='w-20 mx-auto' />
                                <h1 className='font-bold text-xl'>{skills.name}</h1>
                                {/* <p className='text-sm'>{skills.description}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;