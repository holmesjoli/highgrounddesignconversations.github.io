import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ExternalMain, InternalMain } from "../components/Main";

import { eventManager } from "../utils/global";

function Password({isVerified, setIsVerified}) {

    const checkPw = () => {
        // gets the current input value
        const answer = document.getElementById("outlined-password-input").value;
    
        if (answer === "HGDC2024") { 
        setIsVerified(true);
        } else {
        alert("Sorry, that's not it");
        }
    };

    return(
        <div className="Password">
            <p>Invitees of HGDC 2024 are invited to sign into the conference website using the password emailed to you.</p>
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
            {isVerified ? <InternalMain pageName="Participants"/>: 
            <ExternalMain pageName="Home">
                <Password isVerified={isVerified} setIsVerified={setIsVerified}/>
             </ExternalMain>
            }
        </>
    );
};


