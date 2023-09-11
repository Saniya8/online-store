import React from 'react'
import Navbar2 from '../components/Navbar2';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import Hero4 from '../components/Hero4';
import Footer from '../components/Footer';
import SwiperComponent from '../components/SwiperComponent';


const Home = () => {
    return (
        <div>
            <Navbar2 />
            <Hero />
            <Hero2 />
            <Hero4 />
            <SwiperComponent />
            <Footer />
        </div>
    )
}

export default Home