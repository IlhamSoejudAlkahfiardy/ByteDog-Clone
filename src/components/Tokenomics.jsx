import React from 'react'
import TweetComponent from './TweetComponent'

const Tokenomics = () => {
    return (
        <div className='container mx-auto w-full xl:min-h-screen xl:pb-52 pb-20 flex flex-col items-center gap-10'>
            <div className='bg-orange-500 w-fit h-fit'>
                <div className='flex justify-center lg:justify-start items-center'>
                    <p className='font-pp-supply-mono-light tracking-[.45em] text-sm text-orange-500 bg-yellow-950 rounded-lg px-5 py-2'>TOKENOMICS</p>
                </div>
            </div>

            <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-6 lg:px-20 gap-6'>
                <div className='border border-slate-200/15 xl:min-h-52 w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'>
                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>100%</p>
                    <p className='text-slate-500 font-pp-supply-mono-medium text-md'>LP BURNED</p>
                </div>
                <div className='border border-slate-200/15 xl:min-h-52 col-span-1 row-span-2 hidden w-full rounded-xl xl:flex flex-col gap-2 items-center justify-center py-5 bg-black'>
                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>0/0</p>
                    <p className='text-slate-500 font-pp-supply-mono-medium text-md'>TAX</p>
                </div>
                <div className='border border-slate-200/15 xl:min-h-52 w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'>
                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>35,532,962,915</p>
                    <p className='text-slate-500 font-pp-supply-mono-medium text-md'>TOKENS BURNED</p>
                </div>
                <div className='border border-slate-200/15 xl:min-h-52 lg:col-span-2 xl:hidden w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'>
                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>0/0</p>
                    <p className='text-slate-500 font-pp-supply-mono-medium text-md'>TAX</p>
                </div>
                <div className='border border-slate-200/15 xl:min-h-52 w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'>
                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>1 TRILLION</p>
                    <p className='text-slate-500 font-pp-supply-mono-medium text-md'>TOTAL SUPPLY</p>
                </div>
                <div className='border border-slate-200/15 xl:min-h-52 w-full rounded-xl flex flex-col gap-2 items-center justify-center py-5 bg-black'>
                    <p className='text-slate-200 font-pp-supply-mono-medium text-3xl'>964,467,037,085</p>
                    <p className='text-slate-500 font-pp-supply-mono-medium text-md'>CIRCULATING SUPPLY</p>
                </div>
            </div>

            <div className='w-full flex justify-center items-center'>
                <p className='text-slate-200 font-pp-supply-mono-medium text-md'>CONTRACT RENOUNCED</p>
            </div>

            <div className='w-full flex flex-col gap-5 px-6 lg:hidden'>
                <TweetComponent id={'1753778431412621463'} />
                <TweetComponent id={'1753515038248226966'} />
                <TweetComponent id={'1759367538129973424'} />
            </div>
        </div>
    )
}

export default Tokenomics