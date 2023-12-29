import { InternalMain } from "../components/Main";
import { eventManager } from "../utils/global";

const year = new Date().getFullYear();

const policies = [
    {header: "RSVP", p: `Please RVSP and send Steve Wilcox the estimated conference fee* of $250 by April 1st, ${year}.`},
    {header: "Cancellation and Refund", p: `HGDC will refund Participants and Associates if event managers (Steven and ${eventManager.managerName}) are notified of cancellation by June 1st, ${year}.`},
    {header: "Emergency Refund", p: "HGDC will refund Participants and Associations if they cannot attend due to an emergency."},
];

export default function Policies() {
    return(
        <InternalMain pageName="Policies">
            {policies.map((d, i) => 
                <div className="Text" key={i}>
                    <h4>{d.header}</h4>
                    <p>{d.p}</p>
                </div>)}
        </InternalMain>
    )
}
