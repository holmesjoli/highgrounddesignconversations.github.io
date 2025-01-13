import { useState, useEffect } from "react";
import { ExternalMain } from "../components/Main";
import { masterDataURL, wideToLong, parseCSV, attendeeInfo } from "../utils/global";

export default function PastParticipants() {

    const [data, setData] = useState([]);
    const [loading, setLoaded] = useState(true);
    const years = [2024, 2023, 2022];

    useEffect(() => {

        fetch(masterDataURL, {method: 'GET'})
          .then(response => response.text())
          .then(data => {
            setData(wideToLong(parseCSV(data, 1)));
        })
        .finally(setLoaded(false));

    }, []);

    return(
        <ExternalMain pageName="Past-Participants Participants">
            {years.map((year, i) => {
                return (<div className="Inner-Content">
                    <h2>{year}</h2>

                    {year === 2024 ? <img src="/assets/HGDC2024.jpg"/> : null}
                    {year === 2023 ? <img src="/assets/HGDC2023.jpg"/> : null}
                    {year === 2022 ? <img src="/assets/HGDC2022.jpg"/> : null}

                    <h3>Speakers</h3>

                    {year === 2022 ? 
                    data.filter(d => d.Level === "Participant" && !(d.LastName === "Fanning" || d.LastName === "Roederer")).filter(d => d.Year === year).map((d, i) => 
                    attendeeInfo(d, i, loading)
                    ): data.filter(d => d.Level === "Participant").filter(d => d.Year === year).map((d, i) => 
                    attendeeInfo(d, i, loading))
                    }
                    <h3>Associates</h3>
                    {year === 2023 ? 
                        data.filter(d => d.Level === "Associate").filter(d => d.Year === year).filter(d => d.FirstName !== "Jeremy").map((d, i) => 
                        attendeeInfo(d, i, loading))
                    :  year === 2022 ? 
                        data.filter(d => d.Level === "Associate" || d.LastName === "Fanning" || d.LastName === "Roederer").filter(d => d.Year === year).map((d, i) => 
                        attendeeInfo(d, i, loading)) :
                        data.filter(d => d.Level === "Associate").filter(d => d.Year === year).map((d, i) => 
                        attendeeInfo(d, i, loading))
                    }
                    <h3>Event Manager</h3>
                    {year === 2024 ? 
                        data.filter(d => d.LastName === "Holmes").filter(d => d.Year === year).map((d, i) => 
                        attendeeInfo(d, i, loading))
                    : data.filter(d => d.LastName === "Billauer").filter(d => d.Year === year).map((d, i) => 
                        attendeeInfo(d, i, loading))}
                    <h3>Scholars</h3>
                    {year === 2024 ? 
                        data.filter(d => d.Level === "Scholar").filter(d => d.Year === year).map((d, i) => 
                        attendeeInfo(d, i, loading))
                    : data.filter(d => d.Level === "Scholar" || d.LastName === "Holmes").filter(d => d.Year === year).map((d, i) => 
                        attendeeInfo(d, i, loading))
                    }
                </div>)
            })
        };
        </ExternalMain>
    )
}
