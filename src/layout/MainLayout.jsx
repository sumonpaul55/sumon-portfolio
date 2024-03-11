import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/header/Navbar';
import Communicate from '../shared/Communicate/Communicate';
import Footer from '../shared/footer/Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='mt-6 min-h-screen bg-slate-100'>
                <Communicate></Communicate>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>

        </>
    );
};

export default MainLayout;