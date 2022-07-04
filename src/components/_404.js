import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, headText } from '../lib/useAnimation'


export default function _404({ customerName }) {

    return (
        <motion.div className="confirmation__wrap" variants={fadeIn} initial="initial" animate="animate">
            <h2 className="head__text--404"><b>404</b></h2>
            <h2 className="head__text--red"><b>Page Not Found</b></h2>
            <p className="body__text"><a href="https://www.cycleexchange.co.uk/">Back to Site</a></p>
            <div className="link__wrap">
                <h4><a className="head__text" href="mailto:support@cycleexchange.co.uk">support@cycleexchange.co.uk</a></h4>
                <h4><a className="head__text" href="tel:+02085468289">020 8546 8289</a></h4>
            </div>
        </motion.div>
    )
}