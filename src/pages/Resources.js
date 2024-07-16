import { useState, useEffect } from "react";
import { InternalMain } from "../components/Main";
import { resourcesDataURL, parseCSV} from "../utils/global";

export default function Resources() {

    const [data, setData] = useState([]);
    const [loading, setLoaded] = useState(true);
    const years = [2024, 2023];

    useEffect(() => {

        fetch(resourcesDataURL, {method: 'GET'})
          .then(response => response.text())
          .then(data => {
            setData(parseCSV(data));
        })
        .finally(setLoaded(false));

    }, []);

    return(
        <InternalMain pageName="Resources"> 
            {years.map((year, i) => {

                return(
                    <div className="Suggested-Resources" key={i}>
                        <h4 className="Year">{year}</h4>
                        <div className="Resource">
                            {data.filter(d => +d.HGDCYear === year).map((d, j) => 
                                <p className="Text" key={j}><span className="italics">{d.ResourceName}</span>. {d.Author}.</p>
                            )}
                        </div>
                    </div>
                )
            }
            )}
        
        </InternalMain>
    )
}
