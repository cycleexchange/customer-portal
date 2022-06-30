import React from 'react';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";


export default function Email({ fadeIn, email, currentEmail, handleChange, formStep, setFormStep }) {

    const [showInput, setShowInput] = React.useState(false)

    return (
        <motion.div className="question__wrap" variants={fadeIn} initial="initial" animate="animate">
            <p className="body__text">Can we still email you on {currentEmail}?</p>
            <div className="button__wrap--question">
                <Button id="med-button--white" onClick={() => setFormStep(formStep + 1)}>Yes</Button>
                <Button id="med-button--white" type="button" onClick={e => {
                    setShowInput(!showInput)
                    e.preventDefault()
                }}>No</Button>
            </div>
            {showInput ?
                <div className="question__wrap">
                    <motion.div className="question__wrap--hidden" initial={{ y: -500 }} animate={{ y: 0, transition: { duration: .5 } }} exit={{ y: -500, transition: { duration: .5 } }}>
                        <label htmlFor="email">What should we use instead?</label>
                        <input
                            className="large-input"
                            type="text"
                            placeholder={currentEmail}
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </motion.div>
                </div>
                : null}
        </motion.div>
    )
}