import React from 'react';


export default function Nav() {

    return (
        <div className="nav__container">
            <div className="img__wrap"> <a href="https://www.cycleexchange.co.uk/" target="_blank"><img src={require("../assets/ce-logo-black.png")}></img></a></div>
            <div className="links">
                <a className="body__text" href="">Terms & Conditions</a>
                <a className="body__text" href="">Privacy</a>
            </div>
        </div>
    )
}