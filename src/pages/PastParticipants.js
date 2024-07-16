import { useState, useEffect } from "react";
import { ExternalMain } from "../components/Main";
import { masterDataURL, wideToLong, parseCSV, attendeeInfo } from "../utils/global";

export default function PastParticipants() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch(masterDataURL, {method: 'GET'})
          .then(response => response.text())
          .then(data => {
            setData(wideToLong(parseCSV(data)));
        });

    }, []);

    return(
        <ExternalMain pageName="Past-Participants"> 
            <div className="Inner-Content">
                <h3>2024</h3>
                {data.filter(d => d.Level === "Participant").filter(d => d.Year === 2024).map((d, i) => 
                    attendeeInfo(d, i)
                )}
                <h3>Associates</h3>
                {data.filter(d => d.Level === "Associate").filter(d => d.Year === 2024).map((d, i) => 
                    attendeeInfo(d, i)
                )}
                <h3>Event Manager</h3>
                {data.filter(d => d.Level === "Event Manager").filter(d => d.Year === 2024).map((d, i) => 
                    attendeeInfo(d, i)
                )}
                <h3>Scholars</h3>
                {data.filter(d => d.Level === "Scholar").filter(d => d.Year === 2024).map((d, i) => 
                    attendeeInfo(d, i)
                )}
            </div>
        </ExternalMain>
    )
}
