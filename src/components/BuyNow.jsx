import { motion } from 'framer-motion'
import React from 'react'

const BuyNow = () => {
    return (
        <div id='buynow' className='container mx-auto w-full py-20 flex flex-col items-center gap-10'>
            <motion.div

                initial={{
                    opacity: 0,
                    x: -250
                }}

                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: .5
                    }
                }}

                className='bg-orange-500 w-fit h-fit'>
                <div className='flex justify-center lg:justify-start items-center'>
                    <motion.p

                        whileHover={{
                            color: '#FFFFFF',
                            cursor: 'crosshair',
                            transition: {
                                duration: 0.5
                            }
                        }}

                        className='font-pp-supply-mono-light tracking-[.45em] text-sm text-orange-500 bg-yellow-950 rounded-lg px-5 py-2'>BUY NOW</motion.p>
                </div>
            </motion.div>

            <motion.div

                initial={{
                    opacity: 0,
                    x: -250
                }}

                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: .5,
                        delay: 0.2
                    }
                }}

                className='w-3/5 flex justify-center items-center'>
                <p className='text-orange-500 w-64 flex lg:hidden font-pp-supply-mono-medium text-2xl text-center'>SELL YOUR SHYTE, BUY $BYTE</p>
                <p className='text-orange-500 hidden lg:flex font-pp-supply-mono-medium text-3xl text-center'>WE DONT BARK, WE BYTE</p>
            </motion.div>

            <motion.p

                initial={{
                    opacity: 0,
                    x: -250
                }}

                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: .5,
                        delay: 0.4
                    }
                }}

                className='text-gray-500 text-lg xl:text-xl font-medium text-center px-6 lg:px-20 2xl:px-80'>
                $BYTE has the potential to lead the market in the upcoming bull run. As a unique and first-mover in its category, it is the first AI dog meme at a time when the global focus and forefront of technology is on AI, heading into the next major bull market.
            </motion.p>
            <motion.p

                initial={{
                    opacity: 0,
                    x: -250
                }}

                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: .5,
                        delay: 0.4
                    }
                }}

                className='text-gray-500 text-lg xl:text-xl font-medium text-center px-6 lg:px-20 2xl:px-80'>
                The idea of an AI dog like BYTE has sparked curiosity and excitement among people, as it demonstrates the ability of AI to be not only functional but also entertaining and engaging. This serves as a reminder that technology can be fun and relatable.
            </motion.p>
        </div>
    )
}

export default BuyNow