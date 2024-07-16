import { useState, useEffect } from "react";
import { ExternalMain } from "../components/Main";
import { masterDataURL, wideToLong, parseCSV, attendeeInfo } from "../utils/global";

export default function PastParticipants() {

    const [data, setData] = useState([]);
    const years = [2024, 2023, 2022];

    useEffect(() => {

        fetch(masterDataURL, {method: 'GET'})
          .then(response => response.text())
          .then(data => {
            setData(wideToLong(parseCSV(data)));
        });

    }, []);

    return(
        <ExternalMain pageName="Past-Participants">
            {years.map((year, i) => {
                console.log(year);
                return (<div className="Inner-Content">
                    <h3>{year}</h3>
                    <h4>Speakers</h4>
                    {data.filter(d => d.Level === "Participant").filter(d => d.Year === year).map((d, i) => 
                        attendeeInfo(d, i)
                    )}
                    <h4>Associates</h4>
                    {data.filter(d => d.Level === "Associate").filter(d => d.Year === year).map((d, i) => 
                        attendeeInfo(d, i)
                    )}
                    <h4>Event Manager</h4>
                    {data.filter(d => d.Level === "Event Manager").filter(d => d.Year === year).map((d, i) => 
                        attendeeInfo(d, i)
                    )}
                    <h4>Scholars</h4>
                    {data.filter(d => d.Level === "Scholar").filter(d => d.Year === year).map((d, i) => 
                        attendeeInfo(d, i)
                    )}
                </div>)
            })
        };
        </ExternalMain>
    )
}
