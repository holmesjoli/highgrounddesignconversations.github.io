import { useState, useEffect } from "react";

import { InternalMain } from "../components/Main";

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLFdoeX9Ji5UFLRpbCifTuKuX3wSMn7eo9rAjGSmP6mtAJ235-cNIUSti7W8NuMpb85veexDB6NzGU/pub?output=tsv';

function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
    const headers = rows[1].split('\t'); // Extract headers (assumes the first row is the header row)
    const data = []; // Initialize an array to store parsed data
    for (let i = 2; i < rows.length; i++) {
        const rowData = rows[i].split('\t'); // Split the row, handling '\t' characters
        const rowObject = {};
        for (let j = 0; j < headers.length; j++) {
            rowObject[headers[j]] = rowData[j];
        }
        data.push(rowObject);
    }
    return data;
}

function attendeeInfo(d, i) {
    return(
        <div className="Text" key={i}>
            <h4>{d["First Name"]} {d["Last Name"]}</h4>
            <div>
                <p className="Small"><b>{d.Email}</b></p>
                <p className="Small">{d.Bio}</p>
            </div>
        </div>
    )
}

export default function Attendees() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch(url, {method: 'GET'})
          .then(response => response.text())
          .then(data => {
            setData(parseCSV(data).filter(d => d["RSVP 2024"] === "Yes"));
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
                <h3>Scholars</h3>
                {data.filter(d => d.Level === "Scholar").map((d, i) => 
                    attendeeInfo(d, i)
                )}
            </div>
        </InternalMain>
    )
}
