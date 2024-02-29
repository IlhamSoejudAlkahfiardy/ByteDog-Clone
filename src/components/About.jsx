import React, { useState, useEffect } from 'react'
import TweetComponent from './TweetComponent'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'
import { shuffle } from 'txt-shuffle';

const About = () => {
    const [state, setState] = useState({
        animatedText: false,
        shuffledText: '',
        shuffledTextStatus: false
    })

    const { shuffledText, shuffledTextStatus } = state

    useEffect(() => {

        shuffle({
            text: 'ABOUT', fps: 60, duration: .5, animation: 'stay', onUpdate: (output) => {
                setState((prevState) => ({ ...prevState, shuffledText: output }))
            }
        })

    }, [shuffledTextStatus])

    return (
        <div id='about' className='container mx-auto w-full xl:min-h-screen xl:pb-52 pb-20 flex flex-col xl:flex-row xl:items-center gap-16'>
            <div className='flex flex-col gap-10 px-5 lg:px-20 items-center lg:items-start xl:w-1/2'>
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

                    className='bg-orange-500 w-fit h-fit hover:cursor-pointer'

                    onMouseEnter={() => setState((prevState) => ({ ...prevState, shuffledTextStatus: true }))}
                    onMouseLeave={() => setState((prevState) => ({ ...prevState, shuffledTextStatus: false }))}>
                    <div className='flex justify-center lg:justify-start items-center'>
                        <motion.p

                            whileHover={{
                                color: '#FFFFFF',
                                cursor: 'crosshair',
                                transition: {
                                    duration: 0.5
                                }
                            }}

                            className='font-pp-supply-mono-light text-sm tracking-[0.45em] text-orange-500 bg-yellow-950 rounded-lg px-5 py-2'>

                            <span>{shuffledText}</span>

                        </motion.p>
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

                    className='flex flex-col items-center lg:items-start gap-4'>

                    <p className='text-slate-200 font-semibold text-center lg:text-left text-xl'>
                        Byte is Grok's AI digital dog and represents the new era of meme coins with AI meta, especially at a time when AI is just getting started. Byte brings meme coins back to their roots as dogs, which are undeniably the leaders in the meme coin space.
                    </p>
                    <p className='text-slate-200 font-semibold text-center lg:text-left text-xl'>
                        GROK is set to become one of the most recognized and widely used AI platforms globally, and Byte is Grok's digital dog. You can even ask Grok, 'Tell me about the dog named Byte.
                    </p>
                </motion.div>
            </div>

            <motion.div

                initial={{
                    opacity: 0,
                    x: -250,
                    rotate: 0
                }}

                whileInView={{
                    opacity: 1,
                    x: 0,
                    rotate: 5,
                    transition: {
                        duration: .5,
                        delay: 0.4
                    }
                }}

                className='flex justify-center lg:justify-start items-center px-5 lg:px-20 xl:w-1/2'>
                <TweetComponent id={'1754181698294575603'} />
            </motion.div>

        </div>
    )
}

export default About