import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import me from "../../assets/me.png"
import resume from "../../assets/resume.pdf"
import { TypeAnimation } from 'react-type-animation';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate()
    const { user } = useAuth()
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() => {
        if (user) {
            setLoggedIn(true)
        }
    }, [user])


    const hadleDownload = (e, user) => {
        if (!user) {
            e.preventDefault()
            Swal.fire({
                title: "You are not logged in",
                text: "You have to login first, Please login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
            });
        }

    }


    // console.log(user)
    return (
        <section className='bg-slate-800 text-white py-14'>
            <Container>
                <Box>
                    <div className='flex flex-col md:flex-row md:items-center gap-16 md:gap-5'>
                        <div className='text-center md:text-start md:w-1/2'>
                            <div data-aos="fade-right" className='overflow-hidden'>
                                <h2 className='text-xl md:text-3xl lg:text-4xl font-bold pb-10'>Hi, I&apos;m <span className='text-pink-500'>Sumon Chandra Paul</span></h2>
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        "I am, " + `Front end Developer`,
                                        1500, // wait 1s before replacing "Mice" with "Hamsters"
                                        "I am, " + 'React js Developer',
                                        1500,
                                        "I am, " + 'Next js Developer',
                                        1500,
                                        "I am, " + 'Mern stack Developer',
                                        1500,
                                    ]}
                                    wrapper="span"
                                    speed={200}
                                    className='text-xl md:text-3xl font-bold'
                                    repeat={Infinity} />
                                <div className=''>
                                    <div className='mt-2 mb-5 border-slate-600 border max-w-[200px] mx-auto md:mx-0'></div>
                                    <p className='max-w-[400px] mx-auto md:mx-0 text-start'>As a React.js front-end developer, I excel in crafting dynamic websites with a keen emphasis on efficiency and a seamless user experience.</p>
                                    <div className='flex gap-4 md:gap-10 mt-5 justify-center md:justify-start'>
                                        <button onClick={(e) => hadleDownload(e, user)} className='px-4 lg:px-0 font-semibold lg:min-w-[200px] hover:bg-pink-800 duration-200 rounded-md bg-pink-600 py-1 md:py mt-5-2'>
                                            <a href={loggedIn ? resume : ""} download={loggedIn ? true : false}>Download Resume</a>
                                        </button>
                                        <button className='px-4 lg:px-0 font-semibold lg:min-w-[200px] hover:bg-pink-800 duration-200 rounded-md bg-pink-600 py-1 md:py mt-5-2'>
                                            <a href="https://drive.google.com/file/d/17RveTVaFmyA6dtJKwrPjYOUwBXCIVjyE/view?usp=sharing" target='_blank' rel="noreferrer">View Resume</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center md:w-1/2 md:p-20'>
                            <div className='flex items-center justify-center rounded-full' data-aos="fade-left">
                                <img src={me} alt="sumon paul" className='border rounded-full p-1 w-2/3' />
                            </div>
                        </div>
                    </div>
                </Box>
            </Container>
        </section >
    );
};

export default Banner;