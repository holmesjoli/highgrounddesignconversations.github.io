import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { ExternalMain, InternalMain } from "../components/Main";

export default function Home() {

    const [isVerified, setIsVerified] = useState(false);
    
    const checkPw = () => {
        // gets the current input value
        const answer = document.getElementById("password").value;
    
        if (answer === "yourSecretPassword") { 
        setIsVerified(true);
        } else {
        alert("Sorry, that's not it");
        }
    };
    
    return (
        <>
            {isVerified ? <InternalMain pageName="Participants"/>: 
            <>
            <ExternalMain pageName="Home">
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                />
                <Button variant="outlined">submit</Button>
             </ExternalMain>
            </> }
        </>
    );
};


