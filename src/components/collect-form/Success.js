import React from 'react';
import { motion } from "framer-motion";


export default function Success({ fadeAnimation, address, town, postcode, currentEmail, email }) {

    return (
        <motion.div className="confirmation__wrap" variants={fadeAnimation} initial="initial" animate="animate">
            <h2 className="head__text--red">Success! Thanks for selling your bike with Cycle Exchange.</h2>
            <p className="body__text">Details of your collection from</p>
            <p className="body__text--red">{address} {town} {postcode}</p>
            <p className="body__text"> will be sent to</p>
            <p className="body__text--red">{email ? email : currentEmail}</p>
            <div className="link__wrap">
                <p className="body__text"><a href="https://www.cycleexchange.co.uk/">Back to Site</a></p>
            </div>
        </motion.div>
    )
}