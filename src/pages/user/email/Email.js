import './Email.css';
import { useHistory } from "react-router-dom";
import React from "react";

function Email() {
    const history = useHistory();

    function checkIfHavePermission() {
        if(localStorage.getItem('role') !== 'user') {
            logout();
            return false;
        }
        return true;
    }

    function logout() {
        localStorage.clear();
        history.push('');
    }

    function parseEmail(e) {
        e.preventDefault();
        if(!checkIfHavePermission()) {
            return;
        }
        switch (e.target.id) {
            case 'b1':
                console.log('b1');
                break;
            case 'b2':
                console.log('b2');
                break;
            case 'b3':
                console.log('b3');
                break;
            default:
                console.log('default');
        }
    }
    return (
        <section>
            <div className="menu">
                <p>Email: {localStorage.getItem('email')}</p>
                <button type="button" id="b1" onClick={logout}>Log out</button>
            </div>
            <div className="emailContent">
                <div className="emailButtons">
                    <button type="button" id="b1" onClick={parseEmail}>Positive reply</button>
                    <button type="button" id="b2" onClick={parseEmail}>Neutral reply</button>
                    <button type="button" id="b3" onClick={parseEmail}>Not a lead</button>
                </div>
                <div className="emailBody">
                    Hi Stephen,
                    Many thanks for your email to Lauren below.
                    I am now managing Linkedin for 2020 from a B2B perspective and would be interested to know more.
                    I have some availability next week – does 9.30/10am work for you on Monday?

                    Best wishes,
                    Katie


                    Katie Moulton
                    Corporate Account Executive
                    020 3409 6629
                    Biscuiteers Baking Company, Unit 2, Greenlea Park, Prince Georges Road, Wimbledon, SW19 2JD
                    www.biscuiteers.com
                    Why send flowers when you can send Biscuiteers instead?
                    All rights reserved. © Biscuiteers.com
                    Want one of our lovely catalogues?
                </div>
            </div>
        </section>
    );
}

export default Email;
