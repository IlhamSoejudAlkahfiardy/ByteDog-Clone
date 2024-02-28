import React from 'react'
import Logo from '../assets/image/logo.webp'

// icons
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
// import DexToolIcon from './DexToolIcon';
import { RiOpenaiFill } from "react-icons/ri";

const Navbar = () => {
    return (
        <div className='w-full xl:w-500px xl:fixed py-8 flex flex-col lg:flex-row gap-5 justify-center lg:justify-between xl:justify-evenly items-center lg:px-20 xl:px-0'>
            <div className='w-full lg:w-fit flex justify-center items-center'>
                <img src={Logo} alt="" className='w-12 h-12' />
            </div>
            <div className='w-full lg:w-fit flex justify-center gap-4 lg:gap-7'>
                <p className='text-base text-gray-500 font-pp-supply-mono'>HOME</p>
                <p className='text-base text-gray-500 font-pp-supply-mono'>ABOUT</p>
                <p className='text-base text-gray-500 font-pp-supply-mono'>TOKENOMICS</p>
                <p className='text-base text-gray-500 font-pp-supply-mono'>BUY</p>
                <p className='text-base text-gray-500 font-pp-supply-mono'>NOW</p>
            </div>
            <div className='w-full lg:w-fit flex justify-center items-center gap-5'>

                <RiOpenaiFill className='text-xl text-gray-500' />
                <FaXTwitter className='text-xl text-gray-500' />
                <FaTelegramPlane className='text-xl text-gray-500' />
            </div>
        </div>
    )
}

export default Navbar