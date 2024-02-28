import React from 'react'

const BuyNow = () => {
    return (
        <div className='container mx-auto w-full pb-10 flex flex-col items-center gap-10'>
            <div className='bg-orange-500 w-fit h-fit'>
                <div className='flex justify-center lg:justify-start items-center'>
                    <p className='font-pp-supply-mono-light tracking-[.45em] text-sm text-orange-500 bg-yellow-950 rounded-lg px-5 py-2'>BUY NOW</p>
                </div>
            </div>

            <div className='w-3/5 flex justify-center items-center'>
                <p className='text-orange-500 font-pp-supply-mono-medium text-2xl text-center'>SELL YOUR SHYTE, BUY $BYTE</p>
            </div>

            <p className='text-gray-500 text-lg font-medium text-center px-6'>
                $BYTE has the potential to lead the market in the upcoming bull run. As a unique and first-mover in its category, it is the first AI dog meme at a time when the global focus and forefront of technology is on AI, heading into the next major bull market.
            </p>
            <p className='text-gray-500 text-lg font-medium text-center px-6'>
                The idea of an AI dog like BYTE has sparked curiosity and excitement among people, as it demonstrates the ability of AI to be not only functional but also entertaining and engaging. This serves as a reminder that technology can be fun and relatable.
            </p>
        </div>
    )
}

export default BuyNow