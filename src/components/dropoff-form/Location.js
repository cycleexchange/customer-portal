import React from 'react';
import { motion } from "framer-motion";


export default function Location({ fadeIn, location, handleChange }) {

  return (
    <motion.div className="question__wrap" variants={fadeIn} initial="initial" animate="animate">
      <label htmlFor="location">Choose where you're dropping your bike off from the locations below.</label>
      <select
        name="location"
        id="location"
        value={location}
        onChange={handleChange} >
        <option value="Cycle Exchange Kingston">Cycle Exchange Kingston</option>
        <option value="Fettle Hyde Park">Fettle Hyde Park</option>
        <option value="Flamme Rouge Bedford">Flamme Rouge Bedford</option>
      </select>
    </motion.div>
  )
}