import React from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import About from '../components/About'

const LandingPage = () => {
    return (
        <div className='w-full h-[10000px] bg-zinc-950'>
            <Navbar />
            <Welcome />
            <About />
        </div>
    )
}

export default LandingPage