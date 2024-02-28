import React from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Tokenomics from '../components/Tokenomics'
import BuyNow from '../components/BuyNow'
import Sponsor from '../components/Sponsor'

const LandingPage = () => {
    return (
        <div className='w-full min-h-screen bg-zinc-950'>
            <Navbar />
            <Welcome />
            <About />
            <Tokenomics />
            <BuyNow />
            <Sponsor />
        </div>
    )
}

export default LandingPage