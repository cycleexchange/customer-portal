import React from 'react';
import { motion } from 'framer-motion';
import { splashFadeOut, splashImg } from '../lib/useAnimation';



export default function Splash() {

    return (
        <motion.div className="splash__container" variants={splashFadeOut} initial="initial" animate="animate">
             <div className="splash__img"><motion.img variants={splashImg} initial="initial" animate="animate" src={require("../assets/ce-logo-white.png")}></motion.img></div>
        </motion.div>
    )
}