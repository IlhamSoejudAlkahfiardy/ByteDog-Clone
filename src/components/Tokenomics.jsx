import React, { useState, useEffect } from 'react'
import TweetComponent from './TweetComponent'
import { motion } from 'framer-motion'
import { shuffle } from 'txt-shuffle';

const Tokenomics = () => {
    const [state, setState] = useState({
        tokenomics: '',
        tokenomicsStatus: false,

        LPBurnedNumber: '',
        LPBurned: '',
        LPBurnedStatus: false,

        taxNumber: '',
        tax: '',
        taxStatus: false,

        tokenNumber: '',
        token: '',
        tokenStatus: false,

        totalNumber: '',
        total: '',
        totalStatus: false,

        circulatingNumber: '',
        circulating: '',
        circulatingStatus: false,
    })

    const {
        tokenomics,
        tokenomicsStatus,

        LPBurned,
        LPBurnedStatus,
        LPBurnedNumber,

        tax,
        taxNumber,
        taxStatus,

        token,
        tokenNumber,
        tokenStatus,

        total,
        totalNumber,
        totalStatus,

        circulating,
        circulatingNumber,
        circulatingStatus

    } = state

    useEffect(() => {

        shuffle({
            text: 'TOKENOMICS', fps: 60, duration: .5, animation: 'stay', onUpdate: (output) => {
                setState((prevState) => ({ ...prevState, tokenomics: output }))
            }
        })

    }, [tokenomicsStatus])

    useEffect(() => {

        shuffle({
            text: '100%', fps: 60, duration: .5, animation: 'stay', onUpdate: (output) => {
                setState((prevState) => ({ ...prevState, LPBurnedNumber: output }))
            }
        })

        shuffle({
            text: 'LP BURNED', fps: 60, duration: .5, animation: 'stay', onUpdate: (output) => {
                setState((prevState) => ({ ...prevState, LPBurned: output }))
            }
        })

    }, [LPBurnedStatus])

    useEffect(() => {

        shuffle({
            text: '0/0', fps: 60, duration: .5, animation: 'stay', onUpdate: (output) => {
                setState((prevState) => ({ ...prevState, taxNumber: output }))
            }
        })

        shuffle({
            text: 'TAX', fps: 60, duration: .5, animation: 'stay', onUpdate: (output) => {
                setState((prevState) => ({ ...prevState, tax: output }))
            }
        })

    }, [taxStatus])

    useEffect(() => {

        shuffle({
            text: '35,532,962,915', fps: 60, duration: .5, animation: 'stay', onUpdate: (output) => {
                setState((prevState) => ({ ...prevState, tokenNumber: output }))
            }
        })

        shuffle({
            text: 'TOKENS BURNED', fps: 60, duration: .5, animation: 'stay', onUpdate: (output) => {
                setState((prevState) => ({ ...prevState, token: output }))
            }
        })

    }, [tokenStatus])

    useEffect(() => {

        shuffle({
            text: '1 TRILLION', fps: 60, duration: .5, animation: 'stay', onUpdate: (output) => {
                setState((prevState) => ({ ...prevState, totalNumber: output }))
            }
        })

        shuffle({
            text: 'TOTAL SUPPLY', fps: 60, duration: .5, animation: 'stay', onUpdate: (output) => {
                setState((prevState) => ({ ...prevState, total: output }))
            }
        })

    }, [totalStatus])

    useEffect(() => {

        shuffle({
            text: '964,467,037,085', fps: 60, duration: .5, animation: 'stay', onUpdate: (output) => {
                setState((prevState) => ({ ...prevState, circulatingNumber: output }))
            }
        })

        shuffle({
            text: 'CIRCULATING SUPPLY', fps: 60, duration: .5, animation: 'stay', onUpdate: (output) => {
                setState((prevState) => ({ ...prevState, circulating: output }))
            }
        })

    }, [circulatingStatus])

    return (
        <div id='tokenomics' className='container mx-auto w-full xl:min-h-screen flex flex-col items-center justify-center gap-10'>
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

                onMouseEnter={() => setState((prevState) => ({ ...prevState, tokenomicsStatus: true }))}
                onMouseLeave={() => setState((prevState) => ({ ...prevState, tokenomicsStatus: false }))}
            >
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

                        <span>{tokenomics}</span>

                    </motion.p>
                </div>
            </motion.div>

            <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-6 lg:px-20 gap-6'>
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
                            delay: .5
                        }
                    }}

                    className='border border-slate-200/15 group hover:border-orange-500 hover:bg-yellow-950 transition-colors duration-300 xl:min-h-52 w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'

                    onMouseEnter={() => setState((prevState) => ({ ...prevState, LPBurnedStatus: true }))}
                    onMouseLeave={() => setState((prevState) => ({ ...prevState, LPBurnedStatus: false }))}>

                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>{LPBurnedNumber}</p>
                    <p className='text-slate-500 group-hover:text-orange-500 transition-colors duration-300 font-pp-supply-mono-medium text-md'>{LPBurned}</p>
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
                            delay: 0.4
                        }
                    }}

                    className='border border-slate-200/15 group hover:border-orange-500 hover:bg-yellow-950 transition-colors duration-300 xl:min-h-52 col-span-1 row-span-2 hidden w-full rounded-xl xl:flex flex-col gap-2 items-center justify-center py-5 bg-black'

                    onMouseEnter={() => setState((prevState) => ({ ...prevState, taxStatus: true }))}
                    onMouseLeave={() => setState((prevState) => ({ ...prevState, taxStatus: false }))}>

                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>{taxNumber}</p>
                    <p className='text-slate-500 group-hover:text-orange-500 transition-colors duration-300 font-pp-supply-mono-medium text-md'>{tax}</p>
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
                            delay: 0.3
                        }
                    }}

                    className='border border-slate-200/15 group hover:border-orange-500 hover:bg-yellow-950 transition-colors duration-300 xl:min-h-52 w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'
                    onMouseEnter={() => setState((prevState) => ({ ...prevState, tokenStatus: true }))}
                    onMouseLeave={() => setState((prevState) => ({ ...prevState, tokenStatus: false }))}>

                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>{tokenNumber} </p>
                    <p className='text-slate-500 group-hover:text-orange-500 transition-colors duration-300 font-pp-supply-mono-medium text-md'>{token} </p>
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

                    className='border border-slate-200/15 group hover:border-orange-500 hover:bg-yellow-950 transition-colors duration-300 xl:min-h-52 lg:col-span-2 xl:hidden w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'
                    onMouseEnter={() => setState((prevState) => ({ ...prevState, taxStatus: true }))}
                    onMouseLeave={() => setState((prevState) => ({ ...prevState, taxStatus: false }))}>

                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>{taxNumber} </p>
                    <p className='text-slate-500 group-hover:text-orange-500 transition-colors duration-300 font-pp-supply-mono-medium text-md'>{tax} </p>
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
                            delay: 0.1
                        }
                    }}

                    className='border border-slate-200/15 group hover:border-orange-500 hover:bg-yellow-950 transition-colors duration-300 xl:min-h-52 w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'
                    onMouseEnter={() => setState((prevState) => ({ ...prevState, totalStatus: true }))}
                    onMouseLeave={() => setState((prevState) => ({ ...prevState, totalStatus: false }))}>

                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>{totalNumber}</p>
                    <p className='text-slate-500 group-hover:text-orange-500 transition-colors duration-300 font-pp-supply-mono-medium text-md'>{total}</p>
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
                        }
                    }}

                    className='border border-slate-200/15 group hover:border-orange-500 hover:bg-yellow-950 transition-colors duration-300 xl:min-h-52 w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'

                    onMouseEnter={() => setState((prevState) => ({ ...prevState, circulatingStatus: true }))}
                    onMouseLeave={() => setState((prevState) => ({ ...prevState, circulatingStatus: false }))}>

                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>{circulatingNumber}</p>
                    <p className='text-slate-500 group-hover:text-orange-500 transition-colors duration-300 font-pp-supply-mono-medium text-md'>{circulating}</p>
                </motion.div>
            </div>

            <div className='w-full flex justify-center items-center'>
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
                            delay: 0.3
                        }
                    }}

                    className='text-slate-200 font-pp-supply-mono-medium text-md'>CONTRACT RENOUNCED</motion.p>
            </div>

            <div className='w-full flex flex-col gap-5 px-6 lg:hidden items-center'>
                <TweetComponent id={'1753778431412621463'} />
                <TweetComponent id={'1753515038248226966'} />
                <TweetComponent id={'1759367538129973424'} />
            </div>
        </div>
    )
}

export default Tokenomics