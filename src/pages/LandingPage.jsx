import React from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Tokenomics from '../components/Tokenomics'
import BuyNow from '../components/BuyNow'
import Sponsor from '../components/Sponsor'
import Footer from '../components/Footer'

const LandingPage = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert('Copied to clipboard!');
    };

    return (
        <div className='w-full min-h-screen bg-zinc-950 overflow-x-hidden selection:text-slate-200 selection:bg-orange-500  '>
            <Navbar />
            <Welcome copyToClipboard={copyToClipboard} />
            <About />
            <Tokenomics />
            <BuyNow />
            <Sponsor />
            <Footer copyToClipboard={copyToClipboard}/>
        </div>
    )
}

export default LandingPage