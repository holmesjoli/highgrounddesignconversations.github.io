import { useState, useEffect } from "react";

import { InternalMain } from "../components/Main";

const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLFdoeX9Ji5UFLRpbCifTuKuX3wSMn7eo9rAjGSmP6mtAJ235-cNIUSti7W8NuMpb85veexDB6NzGU/pub?output=csv';

function parseCSV(csvText) {
    const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
    const headers = rows[1].split(','); // Extract headers (assumes the first row is the header row)
    const data = []; // Initialize an array to store parsed data
    for (let i = 2; i < rows.length; i++) {
        const rowData = rows[i].split(','); // Split the row, handling '\r' characters
        const rowObject = {};
        for (let j = 0; j < headers.length; j++) {
            rowObject[headers[j]] = rowData[j];
        }
        data.push(rowObject);
    }
    return data;
}

export default function Attendees() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch(url, {method: 'GET'})
          .then(response => response.text())
          .then(data => {
            console.log(data);
            setData(parseCSV(data));
        });

      }, []);

    console.log(data);

    return(
        <InternalMain pageName="Attendees">
            <div className="Inner-Content">
                <h3>Participants</h3>
                <h3>Associates</h3>
                <h3>Scholars</h3>
            </div>
        </InternalMain>
    )
}
