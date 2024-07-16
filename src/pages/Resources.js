import { useState, useEffect } from "react";
import { InternalMain } from "../components/Main";
import { resourcesDataURL, parseCSV} from "../utils/global";

const resources = {2023: [
    {author: "David Graeber and David Wengrow", title: "The Dawn of Everything", year: 2021},
    {author: "Dasha Kiper", title: "Travelers to Unimaginable Lands: Stories of Dementia, the Caregiver, and the Human Brain", year: 2023},
    {author: "Shannon Mattern", title: "Concealment and Compassion", url: "https://placesjournal.org/article/architectural-and-urban-design-for-dementia-care/?cn-reloaded=1", year: 2021}]
};

export default function Resources() {

    const [data, setData] = useState([]);
    const [loading, setLoaded] = useState(true);

    useEffect(() => {

        fetch(resourcesDataURL, {method: 'GET'})
          .then(response => response.text())
          .then(data => {
            setData(parseCSV(data));
        })
        .finally(setLoaded(false));

    }, []);

    console.log(data);

    return(
        <InternalMain pageName="Resources"> 
            {Object.keys(resources).map((d, i) => 
                <div className="Suggested-Resources" key={i}>
                    <h4 className="Year">{d}</h4>
                    <div className="Resource">
                        {resources[d].map((e, j) => 
                            <p className="Text" key={j}><span className="italics">{e.title}</span>. {e.year}. {e.author}.</p>
                        )}
                    </div>
                </div>
            )}
        
        </InternalMain>
    )
}
