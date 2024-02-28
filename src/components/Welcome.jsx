import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

// icons
import { FaArrowRight } from "react-icons/fa";

// images
import Dog1 from '../assets/image/dog1.webp'
import Dog2 from '../assets/image/dog2.webp'
import Dog3 from '../assets/image/dog3.webp'
import Dog4 from '../assets/image/dog4.jpg'
import Dog5 from '../assets/image/dog5.webp'

import { shuffle } from 'txt-shuffle';

const Welcome = ({ copyToClipboard }) => {
    const heroImage = [Dog1, Dog2, Dog3, Dog4, Dog5]

    const [state, setState] = useState({
        currentHeroImage: 0
    })

    const { currentHeroImage } = state

    useEffect(() => {
        const intervalId = setInterval(() => {
            setState((prevState) => ({
                ...prevState,
                currentHeroImage: (prevState.currentHeroImage + 1) % heroImage.length
            }))
        }, 2000);

        return () => clearInterval(intervalId);
    }, [heroImage.length])

    return (
        <div id='home' className='container mx-auto w-full xl:min-h-screen xl:pt-52 py-20 flex flex-col xl:flex-row xl:items-center gap-16'>
            <div className='flex flex-col gap-10 px-5 lg:px-20 items-center lg:items-start'>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -250
                    }}

                    animate={{
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

                            className='font-pp-supply-mono-light tracking-[.45em] text-sm text-orange-500 bg-yellow-950 rounded-lg px-5 py-2'>THE FIRST AI DOG
                        </motion.p>
                    </div>
                </motion.div>
                <div className='flex flex-col items-center lg:items-start gap-4'>
                    <motion.p

                        initial={{
                            opacity: 0,
                            x: -250
                        }}

                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: .5,
                                delay: 0.2
                            }
                        }}

                        className='font-pp-supply-mono-bold text-orange-500 text-5xl lg:text-7xl'>BYTE,</motion.p>
                    <motion.p

                        initial={{
                            opacity: 0,
                            x: -250
                        }}

                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: .5,
                                delay: 0.4
                            }
                        }}

                        className='font-mono text-slate-200 text-5xl lg:text-7xl'>Grok's Dog</motion.p>
                    <motion.p

                        initial={{
                            opacity: 0,
                            x: -250
                        }}

                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: .5,
                                delay: 0.6
                            }
                        }}

                        className='text-slate-200 font-semibold text-center lg:text-left lg:w-96 text-xl'>
                        Byte came to be when someone asked Grok, 'What would you name your dog?' Grok answered, 'Byte.' Byte is Grok's digital dog and serves as a playful reference to the unit of digital information, as well as a nod to the AI's technological nature.
                    </motion.p>
                    <motion.p

                        initial={{
                            opacity: 0,
                            x: -250
                        }}

                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: .5,
                                delay: 0.8
                            }
                        }}

                        whileHover={{
                            color: '#FFFFFF',
                            cursor: 'pointer'
                        }}

                        className='text-orange-500 font-pp-supply-mono text-xs lg:text-base'
                        onClick={() => copyToClipboard('0xde342a3e269056fc3305f9e315f4c40d917ba521')}
                    >
                        CA:0XDE234A3E269056FC3305F9E315F4C40D917BA521
                    </motion.p>
                </div>
                <motion.div

                    initial={{
                        opacity: 0,
                        x: -250
                    }}

                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: .5,
                            delay: 1
                        }
                    }}

                    whileTap={{
                        scale: 0.9,
                        transition: {
                            type: 'spring'
                        }
                    }}

                    className='flex justify-center lg:justify-start items-center'>
                    <a href='https://app.uniswap.org/explore/tokens/ethereum/0xde342a3e269056fc3305f9e315f4c40d917ba521' className='font-pp-supply-mono-medium flex items-center gap-5 text-xl text-orange-500 bg-yellow-950 px-7 py-3 hover:text-zinc-950 hover:bg-orange-500 duration-300 transition-all hover:cursor-pointer'>
                        <FaArrowRight className='inline-block' />
                        BUY $BYTE NOW
                    </a>
                </motion.div>
            </div>

            <AnimatePresence>
                <motion.div

                    id='hero-image'
                    key={`hero-image-${currentHeroImage}`}

                    initial={{
                        opacity: 0,
                        x: -250,
                        rotate: 0
                    }}

                    animate={{
                        opacity: 1,
                        x: 0,
                        rotate: 5,
                        transition: {
                            // duration: .5,
                            type: 'spring'
                        }
                    }}

                    className='w-full lg:w-1/2 md:h-[500px] h-[420px] xl:h-[500px] lg:mx-20' style={{ backgroundImage: `url(${heroImage[currentHeroImage]})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                </motion.div>
            </AnimatePresence>

        </div>
    )
}

export default Welcome