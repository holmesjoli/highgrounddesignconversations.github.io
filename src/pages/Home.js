import React, { useState } from "react";

import { ExternalMain } from "../components/Main";

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
        {isVerified ? <ExternalMain pageName="Home"/>
        :
            (
            <form onSubmit={checkPw}>
            <input id="password" name="password" />
            <button>open sesame</button>
            </form>
            )
        }
        </>
    );
};


