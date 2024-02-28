import React from 'react'

const FooterSocmed = ({ link, title, icon }) => {
    return (
        <a href={link} className='text-gray-500 hover:text-orange-500 transition-all duration-300 font-pp-supply-mono-medium flex gap-4 items-center'>{icon} {title}</a>
    )
}

export default FooterSocmed