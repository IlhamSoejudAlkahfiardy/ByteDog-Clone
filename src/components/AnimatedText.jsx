import { motion } from 'framer-motion'
import React from 'react'

const defaultAnimation = {

  hidden: {
    // color: '#f97316',
    // fontSize: '14px',
    marginRight: '0px',
  },

  visible: {
    // color: '#FFFFFF',
    // fontSize: '20px',
    marginRight: '5px',
  }

}

const AnimatedText = ({ text, trigger }) => {

  return (
    <>
      <span className='sr-only'>
        {text}
      </span>

      <motion.span
        initial='hidden'
        animate={trigger ? 'visible' : 'hidden'}
        transition={{
          staggerChildren: 0.03,
        }}

        aria-hidden>
        {text.split('').map((char, index) => (
          <motion.span variants={defaultAnimation}> {char} </motion.span>
        ))}
      </motion.span>
    </>
  )
}

export default AnimatedText