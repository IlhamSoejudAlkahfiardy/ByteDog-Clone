import React from 'react'

const FooterLink = ({ link, title }) => {
    return (
        <a href={link} className='text-gray-500 hover:text-orange-500 transition-all duration-300 font-pp-supply-mono-medium'>{title}</a>
    )
}

export default FooterLink