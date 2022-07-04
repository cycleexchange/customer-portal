import React from 'react';
import { motion } from "framer-motion";
import { fadeIn, headText } from '../lib/useAnimation'


export default function Expired() {

    return (
        <motion.div className="confirmation__wrap" variants={fadeIn} initial="initial" animate="animate">
            <h2 className="head__text--red">Looks like you can't make any changes to your quote...</h2>
            <p className="body__text">If you've already accepted but need to amend or cancel get in touch:</p>
            <div className="link__wrap">
                <h4><a className="head__text" href="mailto:support@cycleexchange.co.uk">support@cycleexchange.co.uk</a></h4>
                <h4><a className="head__text" href="tel:+02085468289">020 8546 8289</a></h4>
            </div>
        </motion.div>
    )
}