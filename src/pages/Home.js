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
            <h3> Thank you for making the 27th High Ground Design Conversations event a success! Next year's conference is scheduled in Santa Fe for July 10th - July 13th.</h3>
            {/* <h3>Invitees of HGDC {year} may sign into the conference website using the password emailed to you.</h3> */}
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

export default function Home() {

    const [isVerified, setIsVerified] = useState(false);
    
    return (
        <>
            {isVerified ? <Attendees/>: 
            <ExternalMain pageName="Home">
                <Password setIsVerified={setIsVerified}/>
            </ExternalMain>
            }
        </>
    );
};
