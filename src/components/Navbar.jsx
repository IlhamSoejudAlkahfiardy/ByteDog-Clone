import React from 'react'
import Logo from '../assets/image/logo.webp'

// icons
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
// import DexToolIcon from './DexToolIcon';
import { RiOpenaiFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className='w-full z-50 xl:w-500px xl:fixed py-8 flex flex-col lg:flex-row gap-5 justify-center lg:justify-between xl:justify-evenly items-center lg:px-20 xl:px-0'>
            <div className='w-full lg:w-fit flex justify-center items-center'>
                <img src={Logo} alt="" className='w-12 h-12' />
            </div>
            <div className='w-full lg:w-fit flex justify-center gap-4 lg:gap-7'>
                <a href='#home' className='text-base text-gray-500 font-pp-supply-mono hover:text-orange-500 transition-all duration-300'>HOME</a>
                <a href='#about' className='text-base text-gray-500 font-pp-supply-mono hover:text-orange-500 transition-all duration-300'>ABOUT</a>
                <a href='#tokenomics' className='text-base text-gray-500 font-pp-supply-mono hover:text-orange-500 transition-all duration-300'>TOKENOMICS</a>
                <a href='#buynow' className='text-base text-gray-500 font-pp-supply-mono hover:text-orange-500 transition-all duration-300'>BUY NOW</a>
            </div>
            <div className='w-full lg:w-fit flex justify-center items-center gap-5'>

                <RiOpenaiFill className='text-xl text-gray-500 hover:text-orange-500 transition-all duration-300 hover:cursor-pointer' />
                <FaXTwitter className='text-xl text-gray-500 hover:text-orange-500 transition-all duration-300 hover:cursor-pointer' />
                <FaTelegramPlane className='text-xl text-gray-500 hover:text-orange-500 transition-all duration-300 hover:cursor-pointer' />

            </div>
        </div>
    )
}

export default Navbar