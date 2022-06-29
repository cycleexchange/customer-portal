import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CollectForm from './collect-form/CollectForm.js';
import FormStep from './collect-form/Step.js';
import Button from '@mui/material/Button';
import { motion } from "framer-motion";
import { fadeIn, buttonWrap } from '../lib/useAnimation'


export default function Collect() {

    let { id } = useParams()

    const [customerData, setCustomerData] = React.useState("")

    React.useEffect(() => {
        fetch(`/customerdata/${id}`)
            .then(res => res.json())
            .then(data => { setCustomerData(data) })
    }, [])


    const [formStep, setFormStep] = React.useState(1)
    const [formInput, setFormInput] = React.useState({
        email: customerData.email,
        phone: "",
        address: "",
        town: "",
        postcode: ""
    })

    const handleChange = e => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        fetch(`/${id}/collect`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formInput)
        })
            .then(res => res.json())
        e.preventDefault()
    }


    return (
        <motion.div className="form__container" variants={fadeIn} initial="initial" animate="animate">
            <p>We need a bit more information before sorting your collection.</p>
            <p>Fill in the short form below and we'll send a confirmation email with the details.</p>
            <div className="form__window">
                <form onSubmit={handleSubmit}>
                    <CollectForm
                        fadeAnimation={fadeIn}
                        currentEmail={customerData.email}
                        email={formInput.email}
                        phone={formInput.phone}
                        address={formInput.address}
                        handleChange={handleChange}
                        formStep={formStep}
                        setFormStep={setFormStep}
                    />
                    <motion.div className="button__wrap" variants={buttonWrap} initial="initial" animate="animate">
                        <div>
                            {formStep === 1 ? <Link to={`/${id}`}><Button id="med-button--white">Back</Button></ Link> : null}
                            {formStep > 1 ? <Button id="med-button--white" type="button" onClick={() => setFormStep(formStep - 1)}>Back</Button> : null}
                        </div>
                        <FormStep step={formStep} />
                        <div>
                            {formStep < 4 ? <Button id="med-button--red" type="button" onClick={() => setFormStep(formStep + 1)}>Next</Button> : null}
                            {formStep === 4 ?
                                formInput.address && formInput.phone ? <Button id="med-button--red" type="submit">Submit</Button> :
                                    <div className="button__wrap--caption">
                                        {/* <p>Please go back and fill in empty fields before submitting</p> */}
                                        <Button disabled id="med-button--red--disabled" type="submit">Submit</Button>
                                    </div>
                                : null}
                        </div>
                    </motion.div>
                </form>
            </div>
        </motion.div>
    )
}