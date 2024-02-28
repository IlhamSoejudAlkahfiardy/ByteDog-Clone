import React from 'react'

// icons
import { FaArrowRight } from "react-icons/fa";

// images
import Dog1 from '../assets/image/dog1.webp'
import Dog2 from '../assets/image/dog2.webp'
import Dog3 from '../assets/image/dog3.webp'
import Dog4 from '../assets/image/dog4.jpg'
import Dog5 from '../assets/image/dog5.webp'

const Welcome = () => {
    return (
        <div className='container mx-auto w-full xl:min-h-screen xl:pt-52 py-20 flex flex-col xl:flex-row xl:items-center gap-16'>
            <div className='flex flex-col gap-10 px-5 lg:px-20 items-center lg:items-start'>
                <div className='bg-orange-500 w-fit h-fit'>
                    <div className='flex justify-center lg:justify-start items-center'>
                        <p className='font-pp-supply-mono-light tracking-[.45em] text-sm text-orange-500 bg-yellow-950 rounded-lg px-5 py-2'>THE FIRST AI DOG</p>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:items-start gap-4'>
                    <p className='font-pp-supply-mono-bold text-orange-500 text-5xl lg:text-7xl'>BYTE,</p>
                    <p className='font-mono text-slate-200 text-5xl lg:text-7xl'>Grok's Dog</p>
                    <p className='text-slate-200 font-semibold text-center lg:text-left lg:w-96 text-xl'>
                        Byte came to be when someone asked Grok, 'What would you name your dog?' Grok answered, 'Byte.' Byte is Grok's digital dog and serves as a playful reference to the unit of digital information, as well as a nod to the AI's technological nature.
                    </p>
                    <p className='text-orange-500 font-pp-supply-mono text-xs lg:text-base'>
                        CA:0XDE234A3E269056FC3305F9E315F4C40D917BA521
                    </p>
                </div>
                <div className='flex justify-center lg:justify-start items-center'>
                    <p className='font-pp-supply-mono-medium flex items-center gap-5 text-xl text-orange-500 bg-yellow-950  px-7 py-3'>
                        <FaArrowRight className='inline-block' />
                        BUY $BYTE NOW</p>
                </div>
            </div>

            <div className='w-full lg:w-1/2 md:h-[500px] h-[420px] xl:h-[500px] lg:mx-20' style={{ backgroundImage: `url(${Dog5})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

            </div>

        </div>
    )
}

export default Welcome