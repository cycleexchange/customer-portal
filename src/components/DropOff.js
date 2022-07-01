import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DropOffForm from './dropoff-form/DropOffForm.js';
import FormStep from './dropoff-form/Step.js';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";
import { fadeIn, buttonWrap } from '../lib/useAnimation'


export default function DropOff() {

    let { id } = useParams()

    const [formStep, setFormStep] = React.useState(1)
    const [formInput, setFormInput] = React.useState({
        location: "Cycle Exchange Kingston"
    })

    const handleChange = e => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="form__container">
            <p>Let us know where and when you'll be dropping your bike off and we'll send an email with the confirmation details.</p>
            <div className="form__window">
                <form>
                    <DropOffForm
                        fadeAnimation={fadeIn}
                        location={formInput.location}
                        handleChange={handleChange}
                        formStep={formStep}
                    />
                    <motion.div className="button__wrap" variants={buttonWrap} initial="initial" animate="animate">
                        <div>
                            {formStep === 1 ? <Link to={`/${id}`}><Button id="med-button--white">Back</Button></ Link> : null}
                            {formStep > 1 ? <Button id="med-button--white" type="button" onClick={() => setFormStep(formStep - 1)}>Back</Button> : null}
                        </div>
                        <FormStep step={formStep} />
                        <div>
                            {formStep < 2 ? <Button id="med-button--red" type="button" onClick={() => setFormStep(formStep + 1)}>Next</Button> : null}
                            {formStep === 2 ? <div className="button-placeholder"></div> : null}
                        </div>
                    </motion.div>
                </form>
            </div>
        </div>
    )
}
