import { useState, useEffect } from "react";

import { InternalMain } from "../components/Main";
import { masterDataURL, parseCSV, attendeeInfo, currentYearString } from "../utils/global";

export default function Attendees() {

    const [data, setData] = useState([]);
    const [loading, setLoaded] = useState(true);

    useEffect(() => {

        fetch(masterDataURL, {method: 'GET'})
          .then(response => response.text())
          .then(data => {
            setData(parseCSV(data, 1).filter(d => d[currentYearString] === "Yes"));
        })
        .finally(setLoaded(false));

      }, []);

    return(
        <InternalMain pageName="Attendees">
            <div className="Inner-Content">
                <h3>Speakers</h3>
                {data.filter(d => d.Level === "Speaker").map((d, i) => 
                    attendeeInfo(d, i, loading)
                )}
                <h3>Speakers Emeritus</h3>
                {data.filter(d => d.Level === "Speaker Emeritus").map((d, i) => 
                    attendeeInfo(d, i, loading)
                )}
                <h3>Associates</h3>
                {data.filter(d => d.Level === "Associate").map((d, i) => 
                    attendeeInfo(d, i, loading)
                )}
                <h3>Event Manager</h3>
                {data.filter(d => d.Level === "Event Manager").map((d, i) => 
                    attendeeInfo(d, i, loading)
                )}
                <h3>Scholars</h3>
                {data.filter(d => d.Level === "Scholar").map((d, i) => 
                    attendeeInfo(d, i, loading)
                )}
            </div>
        </InternalMain>
    )
}
