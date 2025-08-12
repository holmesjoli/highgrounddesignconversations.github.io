import { useState, useEffect } from "react";
import { ExternalMain } from "../components/Main";
import { resourcesDataURL, parseCSV} from "../utils/global";

export default function ExternalResources() {

    const [data, setData] = useState([]);
    const [types, setTypes] = useState([]);
    const [loading, setLoaded] = useState(true);
    const [years, setYears] = useState([]);

    useEffect(() => {

        fetch(resourcesDataURL, {method: 'GET'})
          .then(response => response.text())
          .then(data => {
            const parsedData = parseCSV(data);
            setData(parsedData);
    
            const typeslist = parsedData.map((a) => {return(a.Type)});
            setTypes([...new Set(typeslist)]);

            const yearslist = parsedData.map((a) => {return(+a.HGDCYear)});
            setYears([...new Set(yearslist)]);
            })
        .finally(setLoaded(false));

    }, []);

    // console.log(data);

    return(
        <ExternalMain pageName="Resources">
            <>
                <p>Books, films, and articles mentioned and referenced during High Ground Design Conversations are listed below.</p>
                {years.sort((a, b) => b-a).map((year, i) => {
                    // return(
                        // types.map((type, j) => {
                        return(
                            <div className="Suggested-Resources" key={i}>
                                <h3 className="Year">{year}</h3>
                                {/* <h4 className="Type">{type}</h4> */}
                                <div className="Resource">
                                    {data.filter(d => +d.HGDCYear === year).map((d, k) => {

                                        if (d.Link === "") {
                                            if (d.RecommendedBy === "") {
                                                return(
                                                    <div className="Text" key={i-k}>
                                                        <p><b>{d.ResourceName}</b></p>
                                                        <p><span>{d.Author}</span></p>
                                                    </div>
                                                )
                                            } else {
                                                return(
                                                    <div className="Text" key={i-k}>
                                                    <p><b>{d.ResourceName}</b> <span> recommended by </span><i>{d.RecommendedBy}</i></p>
                                                    <p><span>{d.Author}</span></p>
                                                </div>
                                                ) 
                                            }
                                        } else {

                                            if (d.RecommendedBy === "") {
                                                return(
                                                    <div className="Text" key={i-k}>
                                                    <p><a href={d.Link}><b>{d.ResourceName}</b></a></p>
                                                    <p><span>{d.Author}</span></p>
                                                </div>
                                                )
                                            } else {
                                                return(
                                                    <div className="Text" key={i-k}>
                                                    <p><a href={d.Link}><b>{d.ResourceName}</b></a> <span> recommended by </span><i>{d.RecommendedBy}</i></p>
                                                    <p><span>{d.Author}</span></p>
                                                </div>
                                                ) 
                                            }
                                        }
                                    }
                                    )}
                                </div>
                            </div>
                        )
                    // }
                // ))
                    }
                )}
            </>
        </ExternalMain>
    )
}
