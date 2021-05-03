import React from 'react';

import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Intro from '../Intro/Intro';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <>
            <Intro></Intro>
            <About></About>
            <Summary></Summary>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </>
    );
};

export default Home;
