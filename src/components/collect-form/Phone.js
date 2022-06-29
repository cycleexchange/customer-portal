import React from 'react';
import { motion } from "framer-motion";


export default function Phone({ fadeIn, phone, handleChange }) {

    return (
        <motion.div className="question__wrap" variants={fadeIn} initial="initial" animate="animate">
            <label htmlFor="phone">What's the best contact number?</label>
            <input
                className="med-input"
                type="text"
                placeholder="+447 777 777"
                name="phone"
                id="phone"
                value={phone}
                onChange={handleChange}
                required
            />
        </motion.div>
    )
}