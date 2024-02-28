import React from 'react'

const SponsorImage = ({ image, title }) => {
    return (
        <div className='w-72 h-64 group border border-slate-200/5 hover:border-orange-500 transition-all duration-300 hover:cursor-pointer rounded-lg mx-3 inline-block py-5'>
            <div className='w-full h-32' style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

            </div>
            <div className='w-full h-24 flex justify-center items-center'>
                <p className='text-slate-300 group-hover:text-orange-500 transition-all duration-300 font-pp-supply-mono-medium text-3xl'>{title}</p>
            </div>
        </div>
    )
}

export default SponsorImage