/* eslint-disable no-unused-vars */
import { Google, RemoveRedEye } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../shared/contextProvider/Authcontext';
import { toast } from 'react-toastify';
import { IconButton } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useaxiosPublic';
import Loading from '../../shared/loadingPage/Loading';
import { useNavigate } from 'react-router-dom';

const image_api = import.meta.env.VITE_IMAGE_API;
const imageHosting = `https://api.imgbb.com/1/upload?key=${image_api}`

const SignIn = () => {
    const [proccesing, setProccesing] = useState(false)
    const [showpass, setShowpass] = useState(false)
    const { loginWithGoogle } = useContext(UserContext)
    const navigate = useNavigate()
    const publicAxios = useAxiosPublic()
    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     const image = form.image.files[0];
    //     if (image) {
    //         setProccesing(true)
    //         try {
    //             const formData = new FormData();
    //             formData.append("image", image)
    //             axios.post(imageHosting, formData)
    //                 .then(res => {
    //                     if (res.data.data.url) {
    //                         const imageUrl = res.data.data.url
    //                         const userInformation = {
    //                             name, email, password, imageUrl
    //                         }
    //                         publicAxios.post("/login", userInformation)
    //                             .then(res => {
    //                                 console.log(res)

    //                                 toast(`Your have registered Succesfully`, {
    //                                     autoClose: 2000,
    //                                     position: "bottom-right"
    //                                 })
    //                             })
    //                         setProccesing(false)
    //                     }
    //                 })

    //         } catch (err) {
    //             Swal.fire(`something went wrong`, { position: "top-right" })
    //             setProccesing(false)
    //         }
    //     }

    //     form.reset()
    // }



    // login with google
    const handelLogin = () => {
        loginWithGoogle()
            .then(result => {
                if (result.user) {
                    toast(`Welcome ${result.user.displayName}`, {
                        position: "bottom-right",
                        autoClose: 3000,
                    })
                    navigate("/")
                }
            }).catch(err => {
                toast(`${err}`)
            })
    }
    return (
        <main className='min-h-screen bg-slate-700 pt-12'>
            <div className="container mx-auto">
                <div className='max-w-[500px] mx-auto border rounded-md p-5'>
                    {/* <form className='text-white space-y-6' onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="">Name</label>
                            <input type="text" required className='w-full rounded-md p-1 bg-slate-200 font-medium outline-none mt-2 text-black' placeholder='Your Name' name='name' />
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="email" required className='w-full rounded-md p-1 bg-slate-200 font-medium outline-none mt-2 text-black' name='email' placeholder='Your Email' />
                        </div>
                        <div className='relative'>
                            <label htmlFor="">Password</label>
                            <input type={showpass ? "text" : "password"} required className='w-full rounded-md p-1 bg-slate-200 font-medium outline-none mt-2 text-black' name='password' placeholder='Password' />
                            {
                                showpass ? <IconButton sx={{ position: "absolute", right: "10px", top: "28px" }} onClick={() => setShowpass(!showpass)}>
                                    < RemoveRedEye sx={{ color: "black" }} />
                                </IconButton> :
                                    <IconButton sx={{ position: "absolute", right: "10px", top: "28px" }} onClick={() => setShowpass(!showpass)}>
                                        <VisibilityOffIcon sx={{ color: "black" }} />
                                    </IconButton>
                            }
                        </div>
                        <div>
                            <label htmlFor="">Your Image</label>
                            <input type="file" name='image' required className='bg-white w-full border-0 p-1 rounded-md text-black cursor-pointer' />
                        </div>
                        <div className='text-center'>
                            <input type="submit" className='px-2 md:px-5 bg-slate-100 text-black py-1 rounded-md lg:px-10 hover:bg-slate-300 cursor-pointer duration-200 hover:scale-105 font-semibold' />
                        </div>
                    </form> */}
                    {
                        proccesing && <Loading></Loading>
                    }
                    <div>
                        <div className='mt-10 text-white'>
                            <h2>Login with google</h2>
                            <button className='text-white mt-5 bg-slate-800 w-full py-2 rounded-md hover:bg-slate-600 duration-200' onClick={handelLogin}>
                                <Google></Google>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignIn;