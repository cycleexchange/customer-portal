import React from 'react';
import { motion } from "framer-motion";


export default function Address({ fadeIn, address, town, postcode, handleChange }) {

    return (
        <motion.div className="question__wrap" variants={fadeIn} initial="initial" animate="animate">
            <label htmlFor="address">What address would you like it collected from?</label>
            <input
                className="large-input"
                type="text"
                placeholder="123 Street"
                name="address"
                id="address"
                value={address}
                onChange={handleChange}
                required
            />
            <input
                className="med-input"
                type="text"
                placeholder="London"
                name="town"
                id="town"
                value={town}
                onChange={handleChange}
                required />
            <input
                className="med-input"
                type="text"
                placeholder="KT1 000"
                name="postcode"
                id="postcode"
                value={postcode}
                onChange={handleChange}
                required />
        </motion.div>
    )
}