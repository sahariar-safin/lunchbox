import React from 'react'
import About from '../components/Home/About';
import Header from '../components/Home/Header';
import Navbar from '../components/Home/Navbar'
import Service from '../components/Home/Service';

function Home() {
    return (
        <div >
            <Navbar />
            <Header />
            <About />
            <Service />
        </div>
    )
}

export default Home
