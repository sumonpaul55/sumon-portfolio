import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import babycare from "../../../assets/projects/babycare.png"
import hostflu from "../../../assets/projects/hostflu.png"
import triptrove from "../../../assets/projects/triptrove.png"
import electronics from "../../../assets/projects/electronics.png"
import todos from "../../../assets/projects/taskmanagement.png"
import library from "../../../assets/projects/library.png"


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
            <section className="py-20 bg-slate-700">
                <div className="container mx-auto">
                    <div className="px-2 md:px-0">
                        <h1 className='text-white font-bold mt-5 font-sans text-2xl md:text-3xl lg:text-4xl border-b w-fit pb-2 border-dashed'>Projects I have Contributed To</h1>
                        <span className="text-white">Checkout Some of My recent Works</span>
                    </div>
                    <div className="mt-20 p-3 px-8 md:px-0" data-aos="fade-up">
                        <Slider {...settings}>
                            <div>
                                <div className="relative mx-2 md:mx-4">
                                    <a href="https://hostflu.netlify.app/" target="_blank" rel="noreferrer">
                                        <img src={hostflu} alt="Hostflu" />
                                        <h1 className="py-3 md:py-8 bg-sky-600 hover:top-0 duration-200 bg-opacity-90 text-center hover:bg-opacity-90 hover:text-pink-600 text-white font-bold absolute bottom-0 w-full text-xl md:text-2xl">Hostflue</h1>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="relative mx-2 md:mx-4">
                                    <a href="https://littlestars-care.web.app" target="_blank" rel="noreferrer">
                                        <img src={babycare} alt="babycare" />
                                        <h1 className="py-3 md:py-8 bg-sky-600 hover:top-0 bg-opacity-90 text-center hover:bg-opacity-90 hover:text-pink-600 text-white font-bold absolute bottom-0 w-full text-xl md:text-2xl">Babycare</h1>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="relative mx-2 md:mx-4">
                                    <a href="https://trip-trove-e91d8.web.app" target="_blank" rel="noreferrer">
                                        <img src={triptrove} alt="triptrove" />
                                        <h1 className="py-3 md:py-8 bg-sky-600 hover:top-0 bg-opacity-90 text-center hover:bg-opacity-90 hover:text-pink-600 text-white font-bold absolute bottom-0 w-full text-xl md:text-2xl">Trip trove</h1>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="relative mx-2 md:mx-4">
                                    <a href="https://scp-electronics.web.app" target="_blank" rel="noreferrer">
                                        <img src={electronics} alt="electronics" />
                                        <h1 className="py-3 md:py-8 bg-sky-600 hover:top-0 bg-opacity-90 text-center hover:bg-opacity-90 hover:text-pink-600 text-white font-bold absolute bottom-0 w-full text-xl md:text-2xl">Electronics</h1>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="relative mx-2 md:mx-4">
                                    <a href="https://task-managemet.web.app" target="_blank" rel="noreferrer">
                                        <img src={todos} alt="babycare" />
                                        <h1 className="py-3 md:py-8 bg-sky-600 hover:top-0 bg-opacity-90 text-center hover:bg-opacity-90 hover:text-pink-600 text-white font-bold absolute bottom-0 w-full text-xl md:text-2xl">Todos</h1>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div className="relative mx-2 md:mx-4">
                                    <a href="https://library-service-management-system.vercel.app/" target="_blank" rel="noreferrer">
                                        <img src={library} alt="library management" />
                                        <h1 className="py-3 md:py-8 bg-sky-600 hover:top-0 bg-opacity-90 text-center hover:bg-opacity-90 hover:text-pink-600 text-white font-bold absolute bottom-0 w-full text-xl md:text-2xl">Library management</h1>
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