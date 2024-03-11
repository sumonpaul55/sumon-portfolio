import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Email, Facebook, GitHub, WhatsApp } from '@mui/icons-material';
const Communicate = () => {
    return (
        <>
            <div className='fixed top-1/3 right-0 space-y-2 hidden sm:block'>
                <div className='flex flex-col justify-end items-end'>
                    <div className='duration-200 bg-white hover:scale-110 hover:text-pink-600'>
                        <a href="https://github.com/sumonpaul55" target='_blank' rel="noreferrer" className='font-semibold p-1 text-md block'>
                            <GitHub fontSize='large' />
                        </a>
                    </div>
                    <div className='duration-200 bg-white hover:scale-110 hover:text-pink-600'>
                        <a href="https://www.linkedin.com/in/sumonpaul5" target='_blank' rel="noreferrer" className='font-semibold p-1 text-md block'>
                            <LinkedInIcon fontSize='large' />
                        </a>
                    </div>
                    <div className='duration-200 bg-white hover:scale-110 hover:text-pink-600'>
                        <a href="https://www.facebook.com/sumonpaul55" target='_blank' rel="noreferrer" className='font-semibold p-1 text-md block'>
                            <Facebook fontSize='large' />
                        </a>
                    </div>
                    <div className='duration-200 bg-white hover:scale-110 hover:text-pink-600'>
                        <a href="https://wa.me/+8801628883217" target='_blank' rel="noreferrer" className='font-semibold p-1 text-md block'>
                            <WhatsApp fontSize='large' />
                        </a>
                    </div>
                    <div className='duration-200 bg-white hover:scale-110 hover:text-pink-600'>
                        <a href="mailto:sumonpaul3217@gmail.com" target='_blank' rel="noreferrer" className='font-semibold p-1 text-md block'>
                            <Email fontSize='large' />
                        </a>
                    </div>
                </div>
            </div>
            {/* for mobile devise */}
            <div className='p-1 bg-pink-700 fixed bottom-0 z-50 flex items-center gap-3 text-white w-full sm:hidden'>
                <a className='flex justify-center items-center gap-1 font-bold border p-1 w-full blcok rounded-md' href="https://wa.me/+8801628883217">
                    <WhatsApp />
                    <h3>Whats app</h3>
                </a>
                <a className='flex justify-center items-center gap-1 font-bold border p-1 w-full blcok rounded-md' href="mailto:sumonpaul3217@gmail.com">
                    <Email />
                    <h3>Email</h3>
                </a>
            </div>
        </>
    );
};

export default Communicate;