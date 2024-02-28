import { motion } from 'framer-motion'
import React from 'react'
import { Tweet } from 'react-tweet'

const TweetComponent = ({ id }) => {
    return (
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
        >
            <Tweet id={id} />
        </motion.div>
    )
}

export default TweetComponent