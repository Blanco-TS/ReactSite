import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Staff from '../Staff';
import Fader from '../Fader';
import Carousel from '../Carousel';
import { motion } from "framer-motion";
import ParticlesBackground from '../ParticleBackground';


function Home () {
    return (
        <motion.div initial={{width : 0}} animate={{width : "100%"}} exit={{x: window.innerWidth, transition: {duration : 0.1}}}>
        <ParticlesBackground/>
        <HeroSection />
        <Fader />
        <Cards />
        <Fader />
        <Carousel />
        <Fader />
        <Staff />
        <Fader />
        <Footer />
        </motion.div>
    );
}

export default Home;