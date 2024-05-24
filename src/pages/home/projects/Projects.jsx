import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import babycare from "../../../assets/projects/babycare.png"
import hostflu from "../../../assets/projects/hostflu.png"
import triptrove from "../../../assets/projects/triptrove.png"
// import electronics from "../../../assets/projects/electronics.png"
import todos from "../../../assets/projects/taskmanagement.png"
import library from "../../../assets/projects/library.png"
import fcmd from "../../../assets/projects/fcmd.png"
import { FaExternalLinkAlt } from "react-icons/fa";



// import "./project.css"
export default class Projects extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto">
                    <div className="px-2 md:px-0">
                        <h1 className='text-white font-bold mt-5 font-sans text-2xl md:text-3xl lg:text-4xl border-b w-fit pb-3 border-dashed'>Projects I have Contributed To</h1>
                        <span className="text-white pt-8 block">Checkout Some of My recent Works</span>
                    </div>
                    <div className="mt-20 p-3 px-8 md:px-0" data-aos="fade-up">
                        <Slider {...settings}>
                            <div>
                                <div className="relative mx-2 md:mx-4">
                                    <a href="https://hostflu.netlify.app/" target="_blank" rel="noreferrer">
                                        <img src={hostflu} alt="Hostflu" />
                                        <h1 className="py-3 bg-slate-800 hover:top-0 duration-300 bg-opacity-80 text-center text-white font-bold absolute bottom-0 w-full text-xl md:text-2xl">
                                            <div className="flex flex-col justify-center items-center gap-2">
                                                <span>Hostflue</span>
                                                <span><FaExternalLinkAlt size={20} /></span>
                                                <span className="text-base">domain hosting company</span>
                                            </div>
                                        </h1>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="relative mx-2 md:mx-4">
                                    <a href="https://fcmd.netlify.app/" target="_blank" rel="noreferrer">
                                        <img src={fcmd} alt="fcmd" />
                                        <h1 className="py-3 bg-slate-800 hover:top-0 duration-300 bg-opacity-80 text-center text-white font-bold absolute bottom-0 w-full text-xl md:text-2xl">
                                            <div className="flex flex-col justify-center items-center gap-2">
                                                <span>FCMD</span>
                                                <span><FaExternalLinkAlt size={20} /></span>
                                                <span className="text-base">Organizational</span>
                                            </div>
                                        </h1>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="relative mx-2 md:mx-4">
                                    <a href="https://littlestars-care.web.app" target="_blank" rel="noreferrer">
                                        <img src={babycare} alt="babycare" />

                                        <h1 className="py-3 bg-slate-800 hover:top-0 bg-opacity-80 text-center text-white font-bold absolute bottom-0 w-full text-xl md:text-2xl">
                                            <div className="flex flex-col justify-center items-center gap-2">
                                                <span>Babycare</span>
                                                <span><FaExternalLinkAlt size={20} /></span>
                                                <span className="text-base">child care</span>
                                            </div>
                                        </h1>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="relative mx-2 md:mx-4">
                                    <a href="https://trip-trove-e91d8.web.app" target="_blank" rel="noreferrer">
                                        <img src={triptrove} alt="triptrove" />
                                        <h1 className="py-3 bg-slate-800 hover:top-0 bg-opacity-80 text-center text-white font-bold absolute bottom-0 w-full text-xl md:text-2xl">
                                            <div className="flex flex-col justify-center items-center gap-2">
                                                <span>Trip trove</span>
                                                <span><FaExternalLinkAlt size={20} /></span>
                                                <span className="text-base">Travel</span>
                                            </div>
                                        </h1>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <div className="relative mx-2 md:mx-4">
                                    <a href="https://task-managemet.web.app" target="_blank" rel="noreferrer">
                                        <img src={todos} alt="babycare" />
                                        <h1 className="py-3 bg-slate-800 hover:top-0 bg-opacity-80 text-center text-white font-bold absolute bottom-0 w-full text-xl md:text-2xl">
                                            <div className="flex flex-col justify-center items-center gap-2">
                                                <span>Todos</span>
                                                <span><FaExternalLinkAlt size={20} /></span>
                                                <span className="text-base">To do application</span>
                                            </div>
                                        </h1>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="relative mx-2 md:mx-4">
                                    <a href="https://library-service-management-system.vercel.app/" target="_blank" rel="noreferrer">
                                        <img src={library} alt="library management" />
                                        <h1 className="py-3 bg-slate-800 hover:top-0 bg-opacity-80 text-center text-white font-bold absolute bottom-0 w-full text-xl md:text-2xl">
                                            <div className="flex flex-col justify-center items-center gap-2">
                                                <span>Library management</span>
                                                <span><FaExternalLinkAlt size={20} /></span>
                                                <span className="text-base">Library management</span>
                                            </div>
                                        </h1>
                                    </a>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}