import React from 'react';
import Address from './Address.js';
import Email from './Email.js';
import Phone from './Phone.js';
import Terms from './Terms.js';


export default function CollectForm({ fadeAnimation, email, currentEmail, phone, address, handleChange, formStep, setFormStep }) {


    switch (formStep) {
        case 1:
            return (
                <Email
                    fadeIn={fadeAnimation}
                    email={email}
                    currentEmail={currentEmail}
                    handleChange={handleChange}
                    formStep={formStep}
                    setFormStep={setFormStep}
                />
            )
        case 2:
            return (
                <Phone
                    fadeIn={fadeAnimation}
                    phone={phone}
                    handleChange={handleChange}
                />
            )
        case 3:
            return (
                <Address
                    fadeIn={fadeAnimation}
                    address={address}
                    // town={formInput.town}
                    // postcode={formInput.postcode}
                    handleChange={handleChange} />
            )
        case 4:
            return (
                <Terms
                    fadeIn={fadeAnimation}
                />
            )
    }
}