import { useState, useEffect } from "react";

import { InternalMain } from "../components/Main";
import { masterDataURL, parseCSV, attendeeInfo } from "../utils/global";

export default function Attendees() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch(masterDataURL, {method: 'GET'})
          .then(response => response.text())
          .then(data => {
            setData(parseCSV(data).filter(d => d["2024"] === "Yes"));
        });

      }, []);

    return(
        <InternalMain pageName="Attendees">
            <div className="Inner-Content">
                <h3>Speakers</h3>
                {data.filter(d => d.Level === "Participant").map((d, i) => 
                    attendeeInfo(d, i)
                )}
                <h3>Associates</h3>
                {data.filter(d => d.Level === "Associate").map((d, i) => 
                    attendeeInfo(d, i)
                )}
                <h3>Event Manager</h3>
                {data.filter(d => d.Level === "Event Manager").map((d, i) => 
                    attendeeInfo(d, i)
                )}
                <h3>Scholars</h3>
                {data.filter(d => d.Level === "Scholar").map((d, i) => 
                    attendeeInfo(d, i)
                )}
            </div>
        </InternalMain>
    )
}
