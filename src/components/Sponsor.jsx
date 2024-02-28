import React from 'react'
import Sponsor1 from '../assets/image/sponsors/1.webp'
import Sponsor2 from '../assets/image/sponsors/2.webp'
import Sponsor3 from '../assets/image/sponsors/3.webp'

const sponsorImage = [
    {
        image: Sponsor1,
        title: 'BANANA GUN'
    },
    {
        image: Sponsor2,
        title: 'UNIBOT'
    },
    {
        image: Sponsor3,
        title: 'MAESTRO'
    },
]

const Sponsor = () => {
    return (
        <div className='w-full pb-10 flex flex-col gap-10'>
            <marquee direction="left" scrollamount="7" className=' w-full overflow-hidden flex gap-5'>

                {sponsorImage.map((sponsor, index) => (
                    <SponsorImage key={index} image={sponsor.image} title={sponsor.title} />

                ))}

            </marquee>

            <marquee direction="right" scrollamount="7" className=' w-full overflow-hidden flex gap-5'>

                {sponsorImage.map((sponsor, index) => (
                    <SponsorImage key={index} image={sponsor.image} title={sponsor.title} />

                ))}

            </marquee>
        </div>
    )
}

const SponsorImage = ({ image, title }) => {
    return (
        <div className='w-72 h-64 border border-slate-200/15 bg-black rounded-lg mx-3 inline-block py-5'>
            <div className='w-full h-32' style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>

            </div>
            <div className='w-full h-24 flex justify-center items-center'>
                <p className='text-slate-300 font-pp-supply-mono-medium text-3xl'>{title}</p>
            </div>
        </div>
    )
}

export default Sponsor