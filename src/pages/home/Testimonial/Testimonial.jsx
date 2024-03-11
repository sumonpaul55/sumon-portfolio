/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jondoe from "../../../assets/jondoe.png"
import testi1 from "../../../assets/testi (1).jpg"
import testi2 from "../../../assets/testi (2).jpg"
import testi3 from "../../../assets/testi (3).png"

// import "./project.css"
export default class Testimonial extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                }
            ]
        };
        return (
            <>

                <section className="py-20 bg-slate-700 px-4">
                    <div className="container mx-auto">
                        <div className="px-2 md:px-0">
                            <h1 className='text-white font-bold mt-5 font-sans text-2xl md:text-3xl lg:text-4xl border-b w-fit pb-2 border-dashed'>Testimonial</h1>
                        </div>
                        <div className="mt-20 p-2" data-aos="fade-up">
                            <Slider {...settings}>
                                {/* <div className="">
                                    <div className="mx-2 md:mx-4 text-white text-center bg-slate-600 p-3 rounded-md shadow border min-h-[300px]">
                                        <img className="w-20 rounded-full border-4 mx-auto" src={testi3} alt="jon doe" />
                                        <h2 className="text-xl font-bold pt-3">Ashiqur Rahman</h2>
                                        <span className="text-sm text-lime-500 font-bold">CEO of Fluresta & Hostflue</span>
                                        <p className="mt-5">Sumon Paul is an exceptional front-end developer. His talent for turning design concepts into visually stunning, responsive websites exceeded our expectations. His attention to detail and proactive communication made the entire process seamless. I highly recommend Sumon for any web development project</p>
                                    </div>
                                </div> */}
                                <div className="">
                                    <div className="mx-2 md:mx-4 text-white text-center bg-slate-600 p-3 rounded-md shadow border border-slate-400 min-h-[300px]">
                                        <img className="w-20 rounded-full border-4 mx-auto" src={testi1} alt="jon doe" />
                                        <h2 className="text-xl font-bold pt-3">Emily Foster</h2>
                                        <span className="text-sm text-lime-500 font-bold">AI Specialist</span>
                                        <p className="mt-5">Sumon Paul is front-end development skills are outstanding. He transformed our design vision into a visually impressive and responsive website. With excellent attention to detail and clear communication, Sumon made the entire process seamless. I highly recommend him for any web development project.</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="mx-2 md:mx-4 text-white text-center bg-slate-600 p-3 rounded-md shadow border border-slate-400 min-h-[300px]">
                                        <img className="w-20 rounded-full border-4 mx-auto" src={testi2} alt="jon doe" />
                                        <h2 className="text-xl font-bold pt-3">Kevin Lee</h2>
                                        <span className="text-sm text-lime-500 font-bold">IT Support Specialist</span>
                                        <p className="mt-5">Sumon Paul is a top-notch front-end developer. His ability to translate design concepts into polished, responsive websites is truly impressive. With a keen eye for detail and effective communication, Sumon delivered exceptional results. I highly recommend him for any web development needs.</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="mx-2 md:mx-4 text-white text-center bg-slate-600 p-3 rounded-md shadow border border-slate-400 min-h-[300px]">
                                        <img className="w-20 rounded-full border-4 mx-auto" src={testi3} alt="jon doe" />
                                        <h2 className="text-xl font-bold pt-3">Tanbirul Zihad</h2>
                                        <span className="text-sm text-lime-500 font-bold">Content Writter</span>
                                        <p className="mt-5">Sumon Paul is an exceptional front-end developer. His proficiency in turning design ideas into visually striking, responsive websites is commendable. With a keen eye for detail and effective communication, Sumon delivered impressive results. Highly recommended for any web development project.</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="mx-2 md:mx-4 text-white text-center bg-slate-600 p-3 rounded-md shadow border-slate-400 border min-h-[300px]">
                                        <img className="w-20 rounded-full border-4 mx-auto" src={jondoe} alt="jon doe" />
                                        <h2 className="text-xl font-bold pt-3">Ashiqur Rahman</h2>
                                        <span className="text-sm text-lime-500 font-bold">CEO of Fluresta & Hostflue</span>
                                        <p className="mt-5">Sumon Paul's front-end development expertise is outstanding. He seamlessly brought our design vision to life with precision and creativity. His attention to detail, timely communication, and commitment to quality make him a standout choice for any web development project. Highly recommended.</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}