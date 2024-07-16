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
            <>
                <p>Books, films, and articles mentioned and referenced during High Ground Design Conversations are listed below. Special thanks to Rick Griffith and Mickey McManus for their careful tracking of these resources throughout the talks, and to Rick Griffith for compiling these resources into an accessible list on <a href="https://bookshop.org/lists/high-ground-book-citations?" target="_blank" className="underline">Bookshop.org.</a></p>
                {years.map((year, i) => {
                    return(
                        <div className="Suggested-Resources" key={i}>
                            <h4 className="Year">{year}</h4>
                            <div className="Resource">
                                {data.filter(d => +d.HGDCYear === year).map((d, j) =>
                                    <div className="Text" key={j} >
                                        <a href={d.Link}>
                                            <p className="Small"><b>{d.ResourceName}</b></p>
                                        </a>
                                        <p className="Small">{d.Author}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                }
                )}
            </>
        </InternalMain>
    )
}
