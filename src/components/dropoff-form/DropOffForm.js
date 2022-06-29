import React from 'react';
import Location from './Location.js';
import Schedule from './Schedule.js';


export default function DropOffForm({ fadeAnimation, formStep, location, handleChange }) {

    switch (formStep) {
        case 1:
            return (
                <Location
                    fadeIn={fadeAnimation}
                    location={location}
                    handleChange={handleChange}
                />
            )
        case 2:
            return (
                <Schedule
                    fadeIn={fadeAnimation}
                    location={location}
                />
            )
    }

}