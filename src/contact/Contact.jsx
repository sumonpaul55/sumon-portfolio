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
        emailjs.sendForm('service_s6k37ie', 'template_zsme3ms', form.current, "ymHlpPw1QxjqgRYGw")
            .then((result) => {
                if (result.status === 200) {
                    Swal.fire(`Thank You so much, I will reach you as soon as possible`, {
                        icon: "success",
                        position: "top-right"
                    })
                }
            }, (error) => {
                Swal.fire(`${error.text}`, {
                    position: "top-right"
                })
            });
    };
    return (
        <>
            <MyHelmet title="Contact me"></MyHelmet>
            <main className='min-h-screen bg-slate-600 py-32'>
                <div className="container mx-auto">
                    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 items-center mt-10'>
                        <div>
                            <div className=''>
                                <Player
                                    autoplay
                                    loop
                                    src={contactAnimation}
                                    style={{ height: '400px', width: '400px' }}
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
                                        <input type="text" name='name' required placeholder='Name' className='w-full rounded-md py-1 px-3 outline-0 ' />
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
                                <input type="submit" className='text-white py-1 cursor-pointer hover:bg-indigo-950 text-center rounded-md px-4 bg-indigo-800 ' />
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Contact;