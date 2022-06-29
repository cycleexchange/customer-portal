import React from 'react';
import { motion } from "framer-motion";


export default function Terms(fadeIn) {

    return (
        <motion.div className="question__wrap--terms" variants={fadeIn} initial="initial" animate="animate">
            <motion.div variants={fadeIn} initial="initial" animate="animate">
                <p>Please make sure your bike is clean. If your bike is too dirty to work on we will add a
                    cleaning surcharge.</p>
                <div className="checkbox__wrap">
                    <input type="checkbox" id="check-1" required />
                    <label htmlFor="check-1">I understand</label>
                </div>
            </motion.div>
            <div id="collect-3-2">
                <p>Our pricing factors in a service and replacement of some parts (eg cables, brake pads) which
                    is
                    needed for resale. However if the cost of replacing parts goes above 5% of the
                    bike's
                    quoted value, those costs will need to be deducted from the amount paid.</p>
                <div className="checkbox__wrap">
                    <input type="checkbox" id="check-2" required />
                    <label htmlFor="check-2">I understand</label>
                </div>

            </div>
            <div>
                <p>We aim to pick up within 7 days with our team of van drivers. This is subject to location and
                    routing. We will be in contact to finalise a day that works for you.</p>
                <div className="checkbox__wrap">
                    <input type="checkbox" id="check-3" required />
                    <label htmlFor="check-3">I understand</label>
                </div>
            </div>
        </motion.div>
    )
}