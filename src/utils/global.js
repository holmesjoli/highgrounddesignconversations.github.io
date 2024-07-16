import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const eventManager = {managerName: "Joli Holmes", phone: "206.915.0891", email: "holmesjoli@gmail.com"}
export const gateCode = "1966";
export const eventAddress = '171 County Road 74 Santa Fe, NM 85706';
export const masterDataURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLFdoeX9Ji5UFLRpbCifTuKuX3wSMn7eo9rAjGSmP6mtAJ235-cNIUSti7W8NuMpb85veexDB6NzGU/pub?output=tsv';
export const resourcesDataURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQLFdoeX9Ji5UFLRpbCifTuKuX3wSMn7eo9rAjGSmP6mtAJ235-cNIUSti7W8NuMpb85veexDB6NzGU/pub?gid=1855132867&single=true&output=tsv';

export function parseCSV(csvText) {
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

export function wideToLong(array) {
    const long = array.flatMap(c => // flatMap maps each value to an array and then flattens it to single array
        Object.keys(c)                // get the keys of each object
            .filter(k => parseInt(k))   // filter the keys that are numbers so only 1950, 1951 and others remain
            .map(year => 
                c[year] === "Yes" ? (
                    {             // map each year to separate object         
                        FirstName: c.FirstName,
                        LastName: c.LastName,
                        Email: c.Email,
                        Level: c.Level,
                        Bio: c.Bio,
                        Year: parseInt(year),
                        Value: c[year]
                    }): null
        ).filter(d => d) // filter out null values
        );

    return long;
}

export function attendeeInfo(d, i, loading) {
    return(
        loading? 
        <Stack spacing={1}>
            <Skeleton variant="rectangular" width={'100%'} height={60} />
        </Stack>
        : 
        <div className="Text" key={i}>
            <h4>{d.FirstName} {d.LastName}</h4>
            <div>
                <p className="Small"><b>{d.Email}</b></p>
                <p className="Small">{d.Bio}</p>
            </div>
        </div>
        
    )
}