import React from 'react';


export default function Success({ address, town, postcode, currentEmail, email }) {

    return (
        <div className="success__wrap">
            <h2 className="head__text">Success! Thanks for selling your bike with Cycle Exchange.</h2>
            <p className="body__text">Details of your collection from</p>
            <p className="body__text--red">{address} {town} {postcode}</p>
            <p className="body__text"> will be sent to</p>
            <p className="body__text--red">{email ? email : currentEmail}.</p>
        </div>
    )
}