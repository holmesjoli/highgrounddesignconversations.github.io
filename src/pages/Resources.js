import Main from "../components/Main";

const resources = {2023: [
    {author: "David Graeber and David Wengrow", title: "The Dawn of Everything", year: 2021},
    {author: "Dasha Kiper", title: "Travelers to Unimaginable Lands: Stories of Dementia, the Caregiver, and the Human Brain", year: 2023},
    {author: "Shannon Mattern", title: "Concealment and Compassion", url: "https://placesjournal.org/article/architectural-and-urban-design-for-dementia-care/?cn-reloaded=1", year: 2021}]
};

export default function Resources() {
    return(
        <Main pageName="Resources"> 
            {Object.keys(resources).map((d, i) => 
                <div className="Suggested-Resources" key={i}>
                    <h4 className="Year">{d}</h4>
                    <div className="Resource">
                        {resources[d].map((e, j) => 
                            <div className="Text" key={j}>
                            <p><span className="italics">{e.title}</span>. {e.year}. {e.author}.</p>
                            </div>)}

                    </div>
                </div>
            )}
        
        </Main>
    )
}
