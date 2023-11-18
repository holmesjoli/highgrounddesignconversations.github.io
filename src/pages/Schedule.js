import Main from "../components/Main";

const schedule = [{header: "Schedule", p: ""},
                  {header: "Thursday 7.11", p: "lodging check-in", time: "afternoon – early eve"},
                  {header: "", p: "TBD",  time: "5 – 7pm"},
                  {header: "Friday 7.12", p: "light breakfast", time: "8:30am"},
                  {header: "", p: "presentations with discussions", time: "9am – 12am"},
                  {header: "", p: "lunch", time: "12 – 1pm"},
                  {header: "", p: "presentations with discussions", time: "1 – 2:30pm"},
                  {header: "", p: "recreational opportunities", time: "2:30 – 5:30pm"},
                  {header: "", p: "drinks at the main HGDC House", time: "5:30 – 7:30pm"},
                  {header: "", p: "dinner at the main HGDC House", time: "7:30 – 8:30pm"},
                  {header: "Saturday 7.13", p: "light breakfast", time: "8:30am"},
                  {header: "", p: "presentations with discussions", time: "9am – 12am"},
                  {header: "", p: "lunch", time: "12 – 1pm"},
                  {header: "", p: "presentations with discussions", time: "1 – 2:30pm"},
                  {header: "", p: "recreational opportunities", time: "2:30 – 5:30pm"},
                  {header: "", p: "drinks at the main HGDC House", time: "5:30 – 7:30pm"},
                  {header: "", p: "dinner at the main HGDC House", time: "7:30 – 8:30pm"},
                  {header: "Sunday 7.14", p: "associate and scholar remarks", time: "9 – 10:30am"}
                ];

export default function Schedule() {
    return(
        <div>
            <Main pageName="Schedule">
            {schedule.map((d, i) => 
                <div className="Text" key={i}>
                    {i === 0 ? <h3>{d.header}</h3>: <h4>{d.header}</h4>}
                    <p>{d.p}</p>
                    {d.time? d.time: <></>}
                </div>)}


            </Main>
        </div>
    )
}
