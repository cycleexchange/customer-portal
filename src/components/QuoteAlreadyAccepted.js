import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, headText } from '../lib/useAnimation'


export default function AlreadyAccepted() {

    return (
        <motion.div className="confirmation__wrap" variants={fadeIn} initial="initial" animate="animate">
            <h2 className="head__text--red">It looks like you've already accepted your quote...</h2>
            <p className="body__text">Need to cancel? Or make a change? <br /> Get in touch:</p>
            <div className="link__wrap">
                <h4><a className="head__text" href="mailto:support@cycleexchange.co.uk">support@cycleexchange.co.uk</a></h4>
                <h4><a className="head__text" href="tel:+02085468289">020 8546 8289</a></h4>
            </div>
        </motion.div>
    )
}