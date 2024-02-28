import React from 'react'
import TweetComponent from './TweetComponent'
import { motion } from 'framer-motion'

const Tokenomics = () => {
    return (
        <div id='tokenomics' className='container mx-auto w-full xl:min-h-screen flex flex-col items-center justify-center gap-10'>
            <motion.div

                initial={{
                    opacity: 0,
                    y: 250
                }}

                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6
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

                        className='font-pp-supply-mono-light tracking-[.45em] text-sm text-orange-500 bg-yellow-950 rounded-lg px-5 py-2'>TOKENOMICS</motion.p>
                </div>
            </motion.div>

            <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-6 lg:px-20 gap-6'>
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
                            delay: .5
                        }
                    }}

                    className='border border-slate-200/15 group hover:border-orange-500 hover:bg-yellow-950 transition-colors duration-300 xl:min-h-52 w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'>
                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>100%</p>
                    <p className='text-slate-500 group-hover:text-orange-500 transition-colors duration-300 font-pp-supply-mono-medium text-md'>LP BURNED</p>
                </motion.div>
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
                            delay: 0.4
                        }
                    }}

                    className='border border-slate-200/15 group hover:border-orange-500 hover:bg-yellow-950 transition-colors duration-300 xl:min-h-52 col-span-1 row-span-2 hidden w-full rounded-xl xl:flex flex-col gap-2 items-center justify-center py-5 bg-black'>
                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>0/0</p>
                    <p className='text-slate-500 group-hover:text-orange-500 transition-colors duration-300 font-pp-supply-mono-medium text-md'>TAX</p>
                </motion.div>
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
                            delay: 0.3
                        }
                    }}

                    className='border border-slate-200/15 group hover:border-orange-500 hover:bg-yellow-950 transition-colors duration-300 xl:min-h-52 w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'>
                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>35,532,962,915</p>
                    <p className='text-slate-500 group-hover:text-orange-500 transition-colors duration-300 font-pp-supply-mono-medium text-md'>TOKENS BURNED</p>
                </motion.div>
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
                            delay: 0.2
                        }
                    }}

                    className='border border-slate-200/15 group hover:border-orange-500 hover:bg-yellow-950 transition-colors duration-300 xl:min-h-52 lg:col-span-2 xl:hidden w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'>
                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>0/0</p>
                    <p className='text-slate-500 group-hover:text-orange-500 transition-colors duration-300 font-pp-supply-mono-medium text-md'>TAX</p>
                </motion.div>
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
                            delay: 0.1
                        }
                    }}

                    className='border border-slate-200/15 group hover:border-orange-500 hover:bg-yellow-950 transition-colors duration-300 xl:min-h-52 w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'>
                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>1 TRILLION</p>
                    <p className='text-slate-500 group-hover:text-orange-500 transition-colors duration-300 font-pp-supply-mono-medium text-md'>TOTAL SUPPLY</p>
                </motion.div>
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
                        }
                    }}

                    className='border border-slate-200/15 group hover:border-orange-500 hover:bg-yellow-950 transition-colors duration-300 xl:min-h-52 w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'>
                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>964,467,037,085</p>
                    <p className='text-slate-500 group-hover:text-orange-500 transition-colors duration-300 font-pp-supply-mono-medium text-md'>CIRCULATING SUPPLY</p>
                </motion.div>
            </div>

            <div className='w-full flex justify-center items-center'>
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