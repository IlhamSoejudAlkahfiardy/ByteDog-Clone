import React from 'react'
import Sponsor1 from '../assets/image/sponsors/1.webp'
import Sponsor2 from '../assets/image/sponsors/2.webp'
import Sponsor3 from '../assets/image/sponsors/3.webp'
import Sponsor4 from '../assets/image/sponsors/4.webp'

import SponsorImage from './SponsorImage'
import { motion } from 'framer-motion'

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
    {
        image: Sponsor4,
        title: '1INCH'
    },

]

const Sponsor = () => {
    return (
        <div className='w-full xl:w-1/2 mx-auto pb-10 flex flex-col gap-10'>
            <marquee direction="left" scrollamount="10" className=' w-full overflow-hidden flex gap-5'>

                {sponsorImage.map((sponsor, index) => (
                    <SponsorImage key={index} image={sponsor.image} title={sponsor.title} />
                ))}

            </marquee>

            <marquee direction="right" scrollamount="10" className=' w-full overflow-hidden flex gap-5'>

                {sponsorImage.map((sponsor, index) => (
                    <SponsorImage key={index} image={sponsor.image} title={sponsor.title} />

                ))}

            </marquee>
        </div>
    )
}

export default Sponsor