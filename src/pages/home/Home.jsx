import { } from '@mui/material';
import React from 'react';
import Banner from './Banner';
import AboutmeSection from './aboutMe/AboutmeSection';
import Skills from './skills/Skills';
// import Projects from './projects/Projects';
// import MyProjects from './projects/MyProjects';
import Projects from './projects/Projects';
import Testimonial from './Testimonial/Testimonial';
import Experiences from './Experiences/Experiences';
// import ConditionalRender from '../../../ConditionalRander';
// import MyHelmet from '../../components/MyHelmet';m 

const Home = () => {
    return (
        <>
            <main className='py-2'>
                <Banner></Banner>
                <AboutmeSection></AboutmeSection>
                <Skills></Skills>
                <Experiences></Experiences>
                <Projects></Projects>
                <Testimonial></Testimonial>
            </main >
        </>
    );
};

export default Home;