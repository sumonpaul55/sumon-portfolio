import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
const Footer = () => {
    return (
        <footer className='py-32 bg-slate-900 px-2'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-14'>
                    <div>
                        <img src={logo} alt="" className='max-w-full md:w-2/3' />
                        <p className='text-white mt-7 leading-relaxed'>
                            Front-end developer crafting pixel-perfect and responsiveness. Proficient in HTML, CSS, JavaScript nad Reactjs and so more. to enhance user experiences. Dedicated to delivering visually appealing and seamlessly functional web development.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-white font-bold text-xl md:text-2xl lg:text-3xl mt-5'>Contact</h2>
                        <div className='mt-10 text-white space-y-4'>
                            <address className='text-white'>Mymensingh, Bangladesh</address>
                            <address>Phone: 01628883217</address>
                            <address>Email: sumonpaul3217@gmail.com</address>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-white font-bold text-xl md:text-2xl lg:text-3xl mt-5'>Links</h2>
                        <div className='mt-10 text-white space-y-5 flex flex-col'>
                            <Link to="/">Home</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/Gallery">Gallery</Link>

                        </div>
                    </div>

                </div>

            </div>
            <div className="container mx-auto">
                <div className='text-center mt-20 text-white bg-slate-600 py-4'>
                    &#169; All right reserve 2023 || sumon paul
                </div></div>
        </footer>
    )
}

export default Footer