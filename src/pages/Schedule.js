import Main from "../components/Main";

const schedule = {thursday: [
                    {header: "Thursday 7.11", p: "lodging check-in", time: "afternoon – early eve"},
                    {header: "", p: "TBD",  time: "5 – 7pm"}],
                  friday: [
                    {header: "Friday 7.12", p: "light breakfast", time: "8:30am", day: "Friday"},
                    {header: "", p: "presentations with discussions", time: "9am – 12am", day: "Friday"},
                    {header: "", p: "lunch", time: "12 – 1pm", day: "Friday"},
                    {header: "", p: "presentations with discussions", time: "1 – 2:30pm", day: "Friday"},
                    {header: "", p: "recreational opportunities", time: "2:30 – 5:30pm", day: "Friday"},
                    {header: "", p: "drinks at the main HGDC House", time: "5:30 – 7:30pm", day: "Friday"},
                    {header: "", p: "dinner at the main HGDC House", time: "7:30 – 8:30pm", day: "Friday"},
                  ],
                  saturday: [
                    {header: "Saturday 7.13", p: "light breakfast", time: "8:30am"},
                    {header: "", p: "presentations with discussions", time: "9am – 12am"},
                    {header: "", p: "lunch", time: "12 – 1pm"},
                    {header: "", p: "presentations with discussions", time: "1 – 2:30pm"},
                    {header: "", p: "recreational opportunities", time: "2:30 – 5:30pm"},
                    {header: "", p: "drinks at the main HGDC House", time: "5:30 – 7:30pm"},
                    {header: "", p: "dinner at the main HGDC House", time: "7:30 – 8:30pm"},
                  ],
                  sunday: [
                    {header: "Sunday 7.14", p: "associate and scholar remarks", time: "9 – 10:30am", day: "Sunday"}
                  ]
};

export default function Schedule() {
    return(
        <div>
            <Main pageName="Schedule">
            {Object.keys(schedule).map((d, i) => 
                <div className="Day" key={i}>
                    {schedule[d].map((e, j) => 
                        <div className="Text" key={j}>
                           <h4>{e.header}</h4>
                           <p>{e.p}</p>
                           <p>{e.time}</p>
                        </div>)}
                </div>
            )}
            </Main>
        </div>
    )
}
