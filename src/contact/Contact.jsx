import React, { useRef } from 'react';
import MyHelmet from '../components/MyHelmet';
import { Player, } from '@lottiefiles/react-lottie-player';
import contactAnimation from "../assets/contactAnimation.json"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_j6jhl8n', 'template_zsme3ms', form.current, "ymHlpPw1QxjqgRYGw")
            .then((result) => {
                if (result.status === 200) {
                    Swal.fire({
                        title: `Thank You so much, I will reach you as soon as possible`,
                        icon: "success",
                        position: "center",
                    })
                }
            }, (error) => {
                Swal.fire({
                    title: error.text,
                    position: "top-right"
                })
            });
    };
    return (
        <>
            <MyHelmet title="Contact me"></MyHelmet>
            <main className='bg-slate-600 md:py-32 py-2 text-sm md:text-inherit'>
                <div className="container mx-auto">
                    <div className='flex flex-col-reverse gap-10 items-center justify-center px-3 mt-10'>
                        <div className=''>
                            <div className=''>
                                <Player
                                    autoplay
                                    loop
                                    src={contactAnimation}
                                    style={{ height: '300px', width: '300px' }}
                                >
                                    {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
                                </Player>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={sendEmail} className='max-w-[500px] space-y-5 text-white' ref={form}>
                                <div className='flex gap-2 justify-between'>
                                    <div>
                                        <label htmlFor="">Name</label>
                                        <input type="text" name='name' required placeholder='Name' className='w-full text-black rounded-md py-1 px-3 outline-0 ' />
                                    </div>
                                    <div>
                                        <label htmlFor="">Email</label>
                                        <input type="email" name='userEmail' required placeholder='Email' className='w-full text-black rounded-md py-1 px-3 outline-0 ' />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="">Phone</label>
                                    <input type="number" required placeholder='Phone' className='w-full text-black appearance-none rounded-md py-1 px-3 outline-0 ' />
                                </div>
                                <div>
                                    <label htmlFor="">Message</label>
                                    <textarea name="massage" placeholder='Message' id="" rows="3" className='w-full p-3 text-black outline-0 rounded-lg'></textarea>
                                </div>
                                <input type="submit" className='text-white py-1 cursor-pointer hover:bg-indigo-950 text-center rounded-md px-4 border text-lg w-full' />
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;