/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import experience from "../../../assets/experiences.png"
// import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const Experiences = () => {

    return (
        <section className='py-10 md:py-32 px-2 bg-[#053E75] overflow-x-hidden'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div data-aos="fade-right">
                        <h1 className='text-white font-bold mt-5 font-sans text-2xl md:text-3xl lg:text-4xl border-b w-fit pb-2 border-dashed'>Experience I have gained form my  work</h1>
                        <div className='mt-7'>
                            <img src={experience} alt="" className='' />
                        </div>
                    </div>
                    <div className='mt-0 md:mt-14' data-aos="fade-left">
                        <Accordion className='mt-10 md:p-8'>
                            <AccordionItem className=''>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='font-bold border border-slate-600 text-white bg-slate-600 p-3 text-sm md:text-md hover:text-pink-500 duration-200'>
                                        HTML, CSS, and JavaScript Mastery
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className='p-2 border border-slate-600'>
                                    <p className='text-slate-300 text-sm md:text-base'>
                                        My journey began with a solid foundation in HTML, CSS, and JavaScript, allowing me to create well-structured, visually appealing, and interactive user interfaces. Crafting clean and semantic HTML structures, styling with precision using CSS, and implementing dynamic functionalities with JavaScript are hallmarks of my development approach.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='mt-3'>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='font-bold border border-slate-600 text-white bg-slate-600 p-3 text-sm md:text-md hover:text-pink-500 duration-200'>
                                        React Proficiency
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className='p-2 border border-slate-600'>
                                    <p className='text-slate-300 text-sm md:text-base'>
                                        With a focus on React, I've honed my skills in component-based architecture, state management, and the virtual DOM. My two years of experience in React demonstrate my ability to build scalable and efficient user interfaces, utilizing concepts such as hooks, context, and higher-order components.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='mt-3'>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='font-bold border border-slate-600 text-white bg-slate-600 p-3 text-sm md:text-md hover:text-pink-500 duration-200'>
                                        CSS Frameworks - Tailwind and Bootstrap
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className='p-2 border border-slate-600'>
                                    <p className='text-slate-300 text-sm md:text-base'>
                                        I bring adaptability to the table with expertise in both Tailwind and Bootstrap. Leveraging these frameworks efficiently, I ensure seamless styling while exploring customization options to tailor designs based on project requirements.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='mt-3'>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='font-bold border border-slate-600 text-white bg-slate-600 p-3 text-sm md:text-md hover:text-pink-500 duration-200'>
                                        Advanced JavaScript Concepts
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className='p-2 border border-slate-600'>
                                    <p className='text-slate-300 text-sm md:text-base'>
                                        Aiming for excellence, I've deepened my understanding of advanced JavaScript concepts such as closures, promises, async/await, and the event loop. This knowledge empowers me to write code that is not only functional but also optimized and maintainable.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;