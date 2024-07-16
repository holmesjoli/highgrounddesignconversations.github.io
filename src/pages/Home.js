import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ExternalMain, InternalMain } from "../components/Main";

import { eventManager } from "../utils/global";

import Attendees from "./Attendees";

const year = new Date().getFullYear();

function Password({setIsVerified}) {

    const checkPw = () => {
        // gets the current input value
        const answer = document.getElementById("outlined-password-input").value;
    
        if (answer === `HGDC${year}`) { 
        setIsVerified(true);
        } else {
        alert(`Incorrect password. Please try again or reach out to ${eventManager.email} for assistance.}`);
        }
    };

    return(
        <div className="Password">
            <h3>Thank you for making the 2024 HGDC a success! Invitees of HGDC 2024 may still access the conference website using the password emailed to you.</h3>
            <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    />
            <Button variant="outlined" onClick={checkPw}>submit</Button>
            <a href={"mailto:"+eventManager.email}>Questions?</a>
        </div>
    )
}

function Banner() {
    return(
        <div className="Banner">
            <p>High Ground Design Conversations 2025 will take place in <span className="bold">Santa Fe</span> from <span className="bold">July 10th - July 13th.</span> Can't wait to see you there!</p>
        </div>
    )
}

export default function Home() {

    const [isVerified, setIsVerified] = useState(false);
    
    return (
        <>
            {isVerified ? <Attendees/>: 
            <>
                <Banner/>
                <ExternalMain pageName="Home">
                
                    <Password setIsVerified={setIsVerified}/>
                </ExternalMain>
            </>
            }
        </>
    );
};
