import './hero.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { Links } from '../sidebar/Links';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
};
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-300%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,
        },
    },
};

export const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate">
                    <motion.h2 variants={textVariants}>ANANYA AGRAWAL</motion.h2>
                    <motion.h1 variants={textVariants}>
                        Web and Android Developer
                    </motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>
                            See the Latest Works
                        </motion.button>
                        {/* <motion.button variants={textVariants} id="Footer">Contact Me</motion.button> */}
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/assets/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate="animate">
                Full Stack Developer
            </motion.div>
            <div className="imageContainer">
                <img src="/assets/ana2.png" alt="" />
            </div>
        </div>
    );
}
