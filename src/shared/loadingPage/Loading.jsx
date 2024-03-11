import React from 'react';
import sostika from "../../assets/sostika.png"
const Loading = () => {
    return (
        <div className='mt-10 flex items-center gap-2'>
            <h1 className='text-white text-xl'>Loading... Please Wait</h1>
            <img src={sostika} alt="" className='w-14 h-14 animate-spin' />
        </div>
    );
};

export default Loading;